import React from 'react'
import { View, Text } from 'react-native'
import imageServer from '../apis/imageServer'

export default () => {

    const [results, setResults] = React.useState([])
    const [errorMessage, setErrorMessage] = React.useState('')
    
    const imagesRequest = async () => {
        try {
                const response = await imageServer.get('', {
                    params: {'results': 10}
                })
                setResults(response.data.results)
        } catch (error) {
            setErrorMessage(error)
        }
    }
    React.useState( () => imagesRequest() , [] )

    return [results, errorMessage]

}