var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-BYGPhf7N.js";import{B as a,u as d}from"./useBookmarks-BY_CHkun.js";import{B as l}from"./BookmarkModal-DGMK40OX.js";import{L as u}from"./Layout-BPdOd1Rw.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-r2OQI4uO.js";import"./BookmarkSettingsItem-C9UzX_LM.js";import"./QueryLabel-CiGbvFdK.js";import"./Plus-ChNYXBRv.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./SettingsItemBase-pJ5WgIh7.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ChevronUp-C71MAo1t.js";import"./ChevronDown-DPBIQHio.js";import"./ChevronRight-BckCGbec.js";import"./ItemBase-q-LDfooT.js";import"./ItemLink-bFvWK9OW.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./Typography-BHNcIxxH.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./ContextMenu-D1_m3HcS.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemLabel-KBN1Srj3.js";import"./FieldBase-eqne-WwB.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./InformationSquare-Cx25xyTl.js";import"./Pencil-v4b2G-N6.js";import"./Trash-Aw4yKrn_.js";import"./SettingsModal-Ocr_lCKp.js";import"./ModalBody-CY91l2Bs.js";import"./Section-BRaGuhHv.js";import"./Flex-DJhBIPT8.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonIcon-DdgcgrDi.js";import"./ButtonLabel-CfdqJJd8.js";import"./TextField-DSU2FLcY.js";import"./SkipLink-Dgr7vA8p.js";import"./CookieBanner-DJRgFs59.js";import"./Link-9JXhPkMC.js";import"./Banner-2ZRfWoLb.js";import"./GlobalHeader-2-_5kNCX.js";import"./useIsDesktop-D4Aibili.js";import"./GlobalAccountButton-TXUATpCe.js";import"./Enter-CidaVE-r.js";import"./GlobalMenuButton-Csrrjbob.js";import"./MenuHamburger-BBEPorEN.js";import"./AccountSelector-B_Ngmqwk.js";import"./Switch-c6ueHKpQ.js";import"./AccountMenu-BmkVq2sD.js";import"./GlobalMenu-BV-cJ0dn.js";import"./Checkmark-CWd8wRaj.js";import"./ArrowUndo-BhG5BbM5.js";import"./Globe-MPkG4s1s.js";import"./BreadcrumbsLink-DogAlUIw.js";import"./ArrowRight-DWa5c0tl.js";import"./Footer-DuD_A72t.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
