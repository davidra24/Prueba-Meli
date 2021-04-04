import express from "express";
import fetch from "node-fetch";
import { API_BASE, API_ITEMS, API_SEARCH, API_CATEGORY } from "../frontend/util/constants";

const apiRoutes = express.Router();
const LIMIT_RANGE = 4

apiRoutes.get('/items', (req, res) => {
    const query = req.query.q
    fetch(`${API_BASE}${API_SEARCH}${query}`)
        .then(res => res.json())
        .then(async response => {
            const avFilter = response.available_filters.find(filter => filter.id === 'category')
            const filter = response.filters.find(filter => filter.id === 'category')
            const categorie = avFilter ? avFilter.values[0] : filter.values[0]
            const parentCategorie = await fetch(`${API_BASE}${API_CATEGORY}${categorie.id}`)
                .then(response => response.json())
            const categories = [parentCategorie.path_from_root[0].name, categorie.name]
            const items = []
            response.results.forEach((result, index) => {
                if(index < LIMIT_RANGE){
                    const condition = result.attributes.find(res => res.id === 'ITEM_CONDITION').value_name 
                    items.push({    
                        id: result.id,
                        title: result.title,
                        price: {
                            currency: result.currency_id,
                            amount: result.price,
                            decimals: 0
                        },
                        address: result.address.state_name,
                        picture: result.thumbnail,
                        condition,
                        free_shipping: result.shipping.free_shipping
                    })
                }
            })
            const newResponse = {
                author: {
                    name: 'Carlos David',
                    lastName: 'Ramírez'
                },
                categories,
                items
            }
            res.send({status: 200, data: newResponse})
        })
        .catch((err) => {
            console.log(err);
            res.send({status: 500, data: null})
        })
})

apiRoutes.get('/items/:id', (req, res) => {
    const id = req.params.id
    const urlItem = `${API_BASE}${API_ITEMS}${id}`
    const urlDescription = `${API_BASE}${API_ITEMS}${id}/description`
    const urls = [urlItem, urlDescription]
    const data = Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    data.then(async response => {
        if(response[0].error) {
            return res.send({status: 404, data: null})
        }
        const parentCategorie = await fetch(`${API_BASE}${API_CATEGORY}${response[0].category_id}`)
                .then(response => response.json())
        const title = response[0].title.replace(/^\s+/g, '').split(' ')
        const result = [title[0], title[1], title[2]]
        const categories = [parentCategorie.path_from_root[0].name, parentCategorie.name, ...result]
        const item = {
            author: {
                name: 'Carlos David',
                lastname: 'Ramírez'
            },
            item: {
                id: response[0].id,
                title: response[0].title,
                categories,
                sold: response[0].sold_quantity,
                price: {
                    currency: response[0].currency_id,
                    amount: response[0].price,
                    decimals: 0
                },
                picture: response[0].pictures[0].url,
                condition: response[0].condition,
                free_shipping: response[0].shipping.free_shipping,
                sold_quality: response[0].sold_quality,
                description: response[1].plain_text
            }
        }
        return res.send({status: 200, data: item})
    })
    .catch((err) => {
        console.log(err);
        res.send({status: 500})
    })
})

export const api = apiRoutes;