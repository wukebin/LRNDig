export const selectProv = (provId) => {
    return {
        type: 'select_prov',
        payload: provId
    };
};
