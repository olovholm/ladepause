export default {
    async hentStasjoner(context) {
        const response = await fetch('http://localhost:8080/stasjoner/fylke/oslo',{
            method: 'GET'
        });

        const responseData = await response.json()

        if(!response.ok) {
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate')
            throw error
        }

        console.log(responseData)
        context.commit('setStasjoner',responseData)


    },

    async hentNærmesteStasjoner(context, coords) {
        const response = await fetch(`http://localhost:8080/stasjoner/lat/${coords.lat}/lon/${coords.lon}`,{
            method: 'GET'
        });

        const responseData = await response.json()

        if(!response.ok) {
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate')
            throw error
        }

        console.log(responseData)
        context.commit('setStasjoner',responseData)


    }
};