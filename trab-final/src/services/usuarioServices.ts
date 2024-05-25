import { api } from './api'

export const criarUsuario = async (nome: string, emailUser: string) => {
    let id;

    try {
        const response = await api.post('/users.json', {
            nome: nome,
            email: emailUser,
        })
        console.log(response)


        id = response.data.name


    } catch (err) {
        console.log("ERRO: ", err)
    }


    try {
        // let emailToIdEncoded = encodeURI(emailUser)

        const emailToId: any = {
            [`${emailUser}`]: id
        }

        emailToId[encodeURI(emailUser)] = id

        console.log(emailToId)
        const resp = await api.patch('/emailToId.json', emailToId)
        console.log(resp)
    }
    catch (err) {
        console.log("ERRO: ", err)
    }
}