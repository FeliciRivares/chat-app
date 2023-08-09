export const successMessage = (messageApi: any, value: string) => {
  messageApi.open({
    type: 'success',
    content: `${value}`,
  })
}

export const errorMessage = (messageApi: any, value: string) => {
  messageApi.open({
    type: 'error',
    content: `Error: ${value}`,
  })
}

export const warningMessage = (messageApi: any, value: string) => {
  messageApi.open({
    type: 'warning',
    content: `Warning: ${value}`,
  })
}
