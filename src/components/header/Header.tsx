import {
  DropdownButton,
  HeaderDiv,
  IconOpenDwn,
  LogoImage,
  MenuDown,
  Reports,
} from './styled'
import logo from '../../asset/logo-lenta-30.svg'
import { useEffect, useRef, useState } from 'react'
import MenuHeader from '../menu-header/MenuHeader'

export default function Header() {
  const arr = ['Прогнозы', 'Отчеты', 'Справочники']
  const [reports, setReports] = useState<number | false>(false)
  const menuRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleOpenReports = (inx: number) => {
    setReports((prevState) => (prevState === inx ? false : inx))
  }

  function handleMouseDown(e: MouseEvent) {
    let isOutside = true
    menuRefs.current.forEach((ref) => {
      if (ref && ref.contains(e.target as Node)) {
        isOutside = false
      }
    })

    if (isOutside) {
      setReports(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [reports])

  return (
    <HeaderDiv>
      <LogoImage src={logo} alt="lenta-logo-30лет" />

      <Reports>
        {arr.map((item, inx) => (
          <MenuDown
            key={inx}
            ref={(el: HTMLDivElement | null) => (menuRefs.current[inx] = el)}
          >
            <DropdownButton onClick={() => handleOpenReports(inx)}>
              {item} <IconOpenDwn />
            </DropdownButton>
            <MenuHeader open={reports === inx ? true : false} item={item} />
          </MenuDown>
        ))}
      </Reports>
    </HeaderDiv>
  )
}
