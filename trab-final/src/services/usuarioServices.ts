// userService.ts
import { api } from "./api";


export const criarUsuario = async (emailUser: string, nome: string) => {
    try {
        const response = await api.post("/users.json", {
            nome: nome,
            email: emailUser,
            carrinho: {
                produtos: [],
            },
        });
        console.log("Objeto enviado para a criação do usuário:", {
            nome: nome,
            email: emailUser,
            carrinho: {
                produtos: [],
            },
        });
        
        const id = response.data.name;
        
        // Salvar o ID do usuário no nó emailToId
        const emailToId: any = {};
        const chave = emailUser.replace(/\./g, "_");
        emailToId[chave] = id;
        await api.patch("/emailToId.json", emailToId);

        return id;
    } catch (err) {
        console.log("ERRO: ", err);
        throw err;
    }
};


// Função para obter o ID do usuário pelo email na coleção emailToId
export const getIdUsuarioPeloEmail = async (email: string | null | undefined) => {
    try {
        // Substituir os pontos por sublinhados para formar a chave na coleção emailToId
        const chave = email?.replace(/\./g, "_");

        // Fazer a requisição GET para obter o ID do usuário associado ao email
        const response = await api.get(`/emailToId/${chave}.json`);

        // Retornar o ID do usuário da resposta
        return response.data;
    } catch (error) {
        console.error('Erro ao obter o ID do usuário pelo email:', error);
        throw error;
    }
};
