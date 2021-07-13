import styled from "styled-components";

export const StyledRedocWrapper = styled.div`
  position: fixed;
  max-width: 100vw;
  height: 100%;

  & .redoc-wrap {
    height: 100%;
  }

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  & h5 {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  & .redoc-wrap .menu-content {
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.palette.action.hover};
  }

  & .redoc-wrap .api-content {
    overflow-y: overlay;
  }

  &.redoc-wrap .menu-content {
    overflow: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    // middle section
    // api info (header with the name of the API)
    & div[id^="tag/"] > div > div:first-child,
    .api-info {
      padding: 24px 24px;
    }
  }

  // right panel json viewer segment
  & .redoc-json > code {
    color: unset;
    padding: unset;
    border-radius: unset;
  }

  // right panel json viewer wrapper
  & .react-tabs__tab-panel > div {
    padding: 24px;
  }

  // left pane search input
  & div[role="search"] {
    padding: 8px 0 4px 0;
    // search icon
    & > svg {
      left: 24px;
    }
    // search input
    & > input.search-input {
      width: calc(100% - 54px);
      padding: 4px 16px;
      margin: 0 8px 0 24px;
    }
  }

  // left page groups
  & li[data-item-id^="group/"] {
    margin-top: ${({ theme }) => theme.spacing(1)}px;

    // group header/label
    & > label[type="group"][role="menuitem"].-depth0 {
      padding: 12px 16px 0px 24px;
    }
  }

  // left pane list item label
  & label[role="menuitem"][type="tag"].-depth1 {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
    padding: 12px 16px 12px 24px;
  }

  // left pane list item drop down content
  &
    li[data-item-id^="tag/"]
    > ul
    > li[data-item-id^="tag/"]
    > label[role="menuitem"].-depth2 {
    font-size: ${({ theme }) => theme.typography.caption.fontSize};
    letter-spacing: ${({ theme }) => theme.typography.caption.letterSpacing};
  }

  // right pane URL dropdown section
  &
    div[id^="operation"]
    > div
    > div:nth-child(2)
    > div:first-child
    > div:nth-child(2),
  div[id^="tag"] > div > div:nth-child(2) > div:first-child > div:nth-child(2) {
    background-color: ${({ theme }) => theme.palette.background.paper};

    // right pane URL section content
    // this section has the full URL displayed inside a  text box
    & div[role="button"] > div {
      background-color: ${({ theme }) => theme.palette.background.paper};
      border-color: ${({ theme }) => theme.palette.divider};
    }
  }

  // middle section endpoint segments
  // set the border bottom color that separates each segment/endpoint from the next
  & div[id^="tag"]:not(:last-of-type):after {
    border-bottom-color: ${({ theme }) => theme.palette.action.hover};
  }

  // middle section 'Response Headers' title
  & div > table > caption {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  // middle section response schema type dropdown select
  &
    div[id^="tag/"]
    > div
    > div:first-child
    .dropdown
    .dropdown-selector
    .dropdown-selector-value {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;
