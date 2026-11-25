var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CmRPDbOf.js";import{B as a,u as d}from"./useBookmarks-DLfibb1h.js";import{B as l}from"./BookmarkModal-BSMZn9rK.js";import{L as u}from"./Layout-iwrXuX5I.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dthlol8g.js";import"./BookmarkSettingsItem-BhlWEViW.js";import"./QueryLabel-BMHDr2yF.js";import"./Plus-BIlgSaK7.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./SettingsItemBase-g7FynA0W.js";import"./ItemMedia-BANum1kS.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./ItemBase-BsdSxlJi.js";import"./ItemLink-BbfZb6VU.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./Typography-3Ni-pGxm.js";import"./MagnifyingGlass-CwhdRafK.js";import"./ContextMenu-Cbf9vWrX.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemLabel-S9If7Ew0.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./InformationSquare-CWm2kkCA.js";import"./Pencil-Df8AjcYs.js";import"./Trash-BLtAnUoG.js";import"./SettingsModal-CEuFBG6Q.js";import"./ModalBody-MM25gKZr.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./ButtonGroup-Cg6ykbdg.js";import"./ButtonIcon-CNrehQ60.js";import"./ButtonLabel-B207nJqR.js";import"./TextField-BmqYfvA4.js";import"./SkipLink-B2JVR-Og.js";import"./CookieBanner-DN9oxIAl.js";import"./Link-Di1sS5P3.js";import"./Banner-CHiyD-pJ.js";import"./GlobalHeader-C9_nPyrF.js";import"./useIsDesktop-BnBN7-h6.js";import"./GlobalAccountButton-CkZ1qyuA.js";import"./Enter-D9jMCMkR.js";import"./GlobalMenuButton-BWiZuY5w.js";import"./MenuHamburger-kBHhFvVJ.js";import"./AccountSelector-Bh3LYNJI.js";import"./Switch-ClafsxpZ.js";import"./AccountMenu-CMinoV1y.js";import"./GlobalMenu-CIdPDdza.js";import"./Checkmark-BU8vtpH6.js";import"./ArrowUndo-L8RPPon2.js";import"./Globe-uYgrsE93.js";import"./BreadcrumbsLink-DVQNZRfZ.js";import"./ArrowRight-CLXTujYb.js";import"./Footer-atzPI7p2.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
