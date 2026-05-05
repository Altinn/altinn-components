import{j as t}from"./iframe-0tjTS8nX.js";import{B as a,u as n}from"./useBookmarks-5bzc56hI.js";import{L as c}from"./Layout-B4WB1J4B.js";import{B as d}from"./BookmarkModal-jRZkrpPM.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BjLBa1JB.js";import"./index-BHkRJabC.js";import"./SettingsSection-CiJ_o1ch.js";import"./Section-CVxfq1Zs.js";import"./BookmarkSettingsItem-Dxjw6uwf.js";import"./QueryLabel-mbq1c_hI.js";import"./Plus-pc4KN7SW.js";import"./useId-DNFZveVv.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./Skeleton-CiSYBb75.js";import"./SettingsItemBase-BnCBqOeC.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./ChevronRight-DKBz6hgL.js";import"./ItemLink-Rfzdlob3.js";import"./ItemMedia-DYrXvlN2.js";import"./XMark-C6HGzv3s.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./ItemControls-C9C9Xohr.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Typography-dEwOKrOW.js";import"./MagnifyingGlass-Djl9xGro.js";import"./ContextMenu-fefVb9IK.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./SearchField-AyG5Put8.js";import"./FieldBase-B4LLLb6y.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./Checkmark-DcFVdWi8.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./List-lf1yby5Z.js";import"./ListItem-BchTOoTJ.js";import"./Divider-BpiCxUGI.js";import"./Pencil-DXqeRT14.js";import"./Trash-BerJMn2e.js";import"./SkipLink-BY2Hz4nr.js";import"./GlobalHeader-CVC8ADKh.js";import"./useIsDesktop-BVM8UbJd.js";import"./GlobalAccountButton-DO3Rbjzf.js";import"./Enter-CHSTGyKA.js";import"./GlobalMenuButton-P2GqDve8.js";import"./MenuHamburger-BCh4cxc2.js";import"./AccountSelector-COKc5X0B.js";import"./heading-Cqt39cfA.js";import"./AccountMenu-XAQIjOHS.js";import"./Switch-B0wE7TCS.js";import"./GlobalMenu-C3cbm-xF.js";import"./ArrowUndo-CIy3NdIH.js";import"./Globe-GB118VNm.js";import"./BreadcrumbsLink-Bztu94MA.js";import"./ArrowRight-9wDMuPBl.js";import"./Footer-DNpsRgsY.js";import"./SettingsModal-Zr84fz_q.js";import"./ModalBody-C_UFaejr.js";import"./ButtonGroup-Rh1_zGFF.js";import"./ButtonIcon-oMKrN6P3.js";import"./ButtonLabel-BqSuwMNK.js";import"./TextField-HOvQkZE2.js";const Ao={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Do=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Do as __namedExportsOrder,Ao as default};
