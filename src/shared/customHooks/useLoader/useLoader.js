import React, {useState} from 'react'

export const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoadingStatus = () => {
        setIsLoading(prev => !prev);
    }

    return {
        isLoading,
        toggleLoadingStatus
    }
}
