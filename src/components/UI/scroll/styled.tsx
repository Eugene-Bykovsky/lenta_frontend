import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import styled from 'styled-components'

export const ScrollContainer = styled(OverlayScrollbarsComponent)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;

  .os-scrollbar-vertical {
    width: 16px;
    margin: 0px 5px 12px 0;
    padding: 4px;
    background: var(--color-scroll-track);
    border-radius: 8px;
    box-shadow: var(--custom-scroll-shadow);
  }

  .os-scrollbar-horizontal {
    margin: 0 0 5px 35px;
    padding: 4px;
    background: var(--color-scroll-track);
    height: 16px;
    border-radius: 8px;
    box-shadow: var(--custom-scroll-shadow);
  }

  .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle {
    min-height: 30px;
    max-height: 30px;
    background-color: var(--color-scroll-thumb);
  }
  .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle {
    min-width: 30px;
    max-width: 30px;
    background-color: var(--color-scroll-thumb);
  }
`

export const Content = styled.div`
  width: 100%;
  height: 150%; // Только для демонстрации скролла
`
