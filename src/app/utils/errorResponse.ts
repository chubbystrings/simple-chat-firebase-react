
const errorResponse = (err: string) => {
    return err.replace(/(Error|auth|Firebase|\)|\(|:|\/)/g, '').replace(/-/g, ' ')
}

export default errorResponse;