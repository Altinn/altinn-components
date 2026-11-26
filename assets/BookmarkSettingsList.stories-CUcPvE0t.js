var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DKOj4Qmf.js";import{B as a,u as d}from"./useBookmarks-CB22odBO.js";import{B as l}from"./BookmarkModal-WrEx5hyN.js";import{L as u}from"./Layout-C77_zlI3.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CQyV1KVq.js";import"./BookmarkSettingsItem-B6BWugkw.js";import"./QueryLabel-upp7ZRLH.js";import"./Plus-CFLLX51l.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./SettingsItemBase-C5KqK7Hg.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ChevronUp-C6mjAtW4.js";import"./ChevronDown-E0Mu4V8Q.js";import"./ChevronRight-BtINKUzX.js";import"./ItemBase-DvuL1i9R.js";import"./ItemLink-5KzMXfWD.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./Typography-eLs7BNQP.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./ContextMenu-Bt2Mhw14.js";import"./useDropdownMenuController-CcFtrCc1.js";import"./Dropdown--jVfBx7U.js";import"./SearchField-TPXYOreq.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemLabel-CcblWyxm.js";import"./FieldBase-B2rDpv5b.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./InformationSquare-CC_FvbA-.js";import"./Pencil-BZ_WJsRY.js";import"./Trash-BH2M-vSd.js";import"./SettingsModal-D9a2GTgV.js";import"./ModalBody-yuWxiPLa.js";import"./Section-DDkkqRz5.js";import"./Flex-DwWkcKON.js";import"./ButtonGroup-tVuhtuMt.js";import"./ButtonIcon-BeQ87dMs.js";import"./ButtonLabel-TaOioUjS.js";import"./TextField-B092Moqu.js";import"./SkipLink-Dd2TvshO.js";import"./CookieBanner-DQKUtDMx.js";import"./Link-Bf9h-zyq.js";import"./Banner-tfb5tHuB.js";import"./GlobalHeader-Ndrp0S0T.js";import"./useIsDesktop-ButgdWSM.js";import"./GlobalAccountButton-D0WFlV57.js";import"./Enter-h7bFRpOG.js";import"./GlobalMenuButton-DGjR9OMW.js";import"./MenuHamburger-biRJv-in.js";import"./AccountSelector-DVWTlh2e.js";import"./Switch-Bkx_nto1.js";import"./AccountMenu-Dihb_EuE.js";import"./GlobalMenu-DJxTXL6b.js";import"./Checkmark-DXw908H5.js";import"./ArrowUndo-Cs7Bhn7X.js";import"./Globe-CyCJXh5C.js";import"./BreadcrumbsLink-W4MU2AZQ.js";import"./ArrowRight-CsC-IM5g.js";import"./Footer-uc4Se_lB.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
