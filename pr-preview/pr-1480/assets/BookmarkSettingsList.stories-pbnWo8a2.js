var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-SD2JkkBx.js";import{B as a,u as d}from"./useBookmarks-Nh3HGaN-.js";import{B as l}from"./BookmarkModal-DtQO4xk3.js";import{L as u}from"./Layout-BDt8b59D.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bkg094iM.js";import"./BookmarkSettingsItem-DU9EB3kE.js";import"./QueryLabel-RT7WXA3k.js";import"./Plus-6xBOzmi7.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./SettingsItemBase-BjY3vV0f.js";import"./ItemMedia-WgmEjgHK.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./ChevronUp-hnI_g5yp.js";import"./ChevronDown-ComuAOz9.js";import"./ChevronRight-N_DPzqc2.js";import"./ItemBase-DnOgGRGx.js";import"./ItemLink-ixQKi9aw.js";import"./ItemControls-CYQHXshs.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./Typography-DYbohGA0.js";import"./MagnifyingGlass-99de9OEC.js";import"./ContextMenu-CJWjRijB.js";import"./useDropdownMenuController-NgifY-S3.js";import"./useIsDesktop-Cel6HB35.js";import"./Dropdown-DNvFP9FV.js";import"./SearchField-CtzaZVEy.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemLabel-BHU5o8nH.js";import"./FieldBase-BELwbvmB.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./InformationSquare-CgIS3Fvj.js";import"./Pencil-BSH3QAqB.js";import"./Trash-CPezUXOI.js";import"./SettingsModal-DCZUEALN.js";import"./ModalBody-CBU8Rivy.js";import"./Section-CUNFbhwF.js";import"./Flex-BqyCauEo.js";import"./ButtonGroup-BGhoB7En.js";import"./ButtonLabel-C9VAwr01.js";import"./TextField-D3MGU2wE.js";import"./SkipLink-Cwn8WHGQ.js";import"./CookieBanner-BkVqc6WW.js";import"./Link-BkAPZJG4.js";import"./Banner-Dk0A6VzB.js";import"./GlobalHeader-Bdc8Rgzj.js";import"./GlobalAccountButton-C-KOrR8o.js";import"./Enter-Cq5qF9Z6.js";import"./GlobalMenuButton-mxTpEkZX.js";import"./MenuHamburger-Wy7pQwlx.js";import"./AccountSelector-Cop3lB5s.js";import"./Switch-D5l1sJVB.js";import"./AccountMenu-8QL85dEA.js";import"./GlobalMenu-wKMszXw_.js";import"./Checkmark-ChNJFaj8.js";import"./ArrowUndo-CXChIdxN.js";import"./Globe-B33k006i.js";import"./BreadcrumbsLink-Cu4BC189.js";import"./ArrowRight-DtY135Ug.js";import"./Footer-FuueFcLe.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
