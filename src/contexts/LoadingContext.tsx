
import { createContext, useState } from 'react'

interface LoadingContextProps {
    loading?: boolean,
    handleLoading?: (isLoading: boolean) => void
}
const LoadingContext = createContext<LoadingContextProps>({})

export function LoadingProvider(props: any) {
    const [loading, setLoading] = useState(true)

    function handleLoading(isLoading: boolean) {
        setLoading(isLoading)
    }

    return (
        <LoadingContext.Provider value={{loading, handleLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}
export default LoadingContext
