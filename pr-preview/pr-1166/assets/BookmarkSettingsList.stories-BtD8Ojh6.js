import{j as t}from"./iframe-BLYnYdJi.js";import{B as a,u as n}from"./useBookmarks-0bzka8CY.js";import{L as c}from"./Layout-DwpQKWX0.js";import{B as d}from"./BookmarkModal-Dla-tb4q.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CND7PM33.js";import"./index-B87fQ9Ty.js";import"./SettingsSection-DwxW4eod.js";import"./Section-B5XykhYf.js";import"./BookmarkSettingsItem-B9VqCBvA.js";import"./QueryLabel-CvjUh3gE.js";import"./Plus-BP2D1YPb.js";import"./useId-X7maRfkh.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./Skeleton-DVFvYbaO.js";import"./SettingsItemBase-Brvq-wHI.js";import"./ChevronUp-B2zncOUr.js";import"./ChevronDown-2Zea4dpX.js";import"./ChevronRight-BKn9ueoN.js";import"./ItemLink-nxmPLkpY.js";import"./ItemMedia-PaceHGjP.js";import"./XMark-Df3dBUtr.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./ItemControls-lA3CDM6n.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Typography-CnODk9AP.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./ContextMenu-B4pAtZpC.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Dropdown-B_CqShRd.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./MenuElipsisHorizontal-CLaaCIK6.js";import"./SearchField-BrbRKSJg.js";import"./FieldBase-CvSJrP7q.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./Checkmark-DfNuFQY9.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./List-DoiYd3aY.js";import"./ListItem-Bj5rSe3Q.js";import"./Divider-D3w2CTq8.js";import"./Pencil-BoAUko9v.js";import"./Trash-C9XX2244.js";import"./SkipLink-xYEyUiMN.js";import"./Banner-S7BmrX51.js";import"./GlobalHeader-DbSCgnog.js";import"./useIsDesktop-Bj1AMvX0.js";import"./GlobalAccountButton-D4kgT2nn.js";import"./Enter-v6RvFZ3i.js";import"./GlobalMenuButton-CMkoCf-z.js";import"./MenuHamburger-C7T2DwIu.js";import"./AccountSelector-6_TLy5eI.js";import"./heading-BECUkATt.js";import"./AccountMenu-BDV5Y0Z5.js";import"./Switch-B7L3DRqE.js";import"./GlobalMenu-DDUT5luW.js";import"./ArrowUndo-nSuILEr9.js";import"./Globe-DWIPGG6q.js";import"./BreadcrumbsLink-D9gY_2H_.js";import"./ArrowRight-C7Lk-vhQ.js";import"./Footer-CtxgjrB5.js";import"./SettingsModal-DLblaO99.js";import"./ModalBody-BORqoVqO.js";import"./ButtonGroup-CEDbAWnm.js";import"./ButtonIcon-B3x5IOfQ.js";import"./ButtonLabel-DtaexAPQ.js";import"./TextField-B__OpzqJ.js";const Do={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...m.parameters?.docs?.source}}};const Ho=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ho as __namedExportsOrder,Do as default};
