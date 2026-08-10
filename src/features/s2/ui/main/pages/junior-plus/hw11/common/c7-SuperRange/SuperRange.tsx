import React from 'react'
import { Slider, type SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: '150px',
                color: '#00cc22',
                height: 2,
                '& .MuiSlider-rail': {
                    color: 'rgba(139, 139, 139, 1)',
                    opacity: 1,
                    height: 3,
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&::after': {
                        height: 6,
                        width: 6,
                        backgroundColor: 'currentColor'
                    },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
