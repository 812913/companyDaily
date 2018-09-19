    axios.get(`/iam/v1/dashboards`)
        .then(action(({ content, totalElements }) => {
            // ...
        }))
        .catch(action((error) => {
            Choerodon.handleResponseError(error);
            this.loading = false;
        }));


handleResponseError:  

        function handleResponseError(error) {
            const response = error.response;
            if (response) {
                const status = response.status;
                switch (status) {
                case 400: {
                    const mess = response.data.message;
                    message.error(mess);
                    break;
                }
                default:
                    break;
                }
            }
        }
