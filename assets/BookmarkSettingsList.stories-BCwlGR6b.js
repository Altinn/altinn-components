var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CJbVApVd.js";import{B as a,u as d}from"./useBookmarks-DbNXkzpZ.js";import{B as l}from"./BookmarkModal-CPxCk1Hp.js";import{L as u}from"./Layout-D4_cnTw3.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Le6NyqAV.js";import"./BookmarkSettingsItem-DX3dZu3Z.js";import"./QueryLabel-nefARRkF.js";import"./Plus-C_JJ1fS4.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./SettingsItemBase-FDuHQDDt.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ChevronUp-Dnc1erKd.js";import"./ChevronDown-CUSqX3Qn.js";import"./ChevronRight-27VbzC_5.js";import"./ItemBase-CW_AfMRn.js";import"./ItemLink-DxGfrHe_.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./Typography-YiefWcUe.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./ContextMenu-DrorVqxf.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./SearchField-v7apZWbj.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemLabel-BQOKZEUY.js";import"./FieldBase-DPozPxXp.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./InformationSquare-COAmcV_p.js";import"./Pencil-CmX4lpax.js";import"./Trash-TofRm-_Y.js";import"./SettingsModal-BrOxt4-B.js";import"./ModalBody-CibPyY7R.js";import"./Section-senxxBaK.js";import"./Flex-DQBhfYN9.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonIcon-CXdZoXpr.js";import"./ButtonLabel-DVwE6I-4.js";import"./TextField-C0Epio0R.js";import"./SkipLink-wPOw8Ojx.js";import"./CookieBanner-BhX6ha7Q.js";import"./Link-Bh7qdzfq.js";import"./Banner-DckGEEVl.js";import"./GlobalHeader-B2VMgRyO.js";import"./useIsDesktop-B-cEhfIa.js";import"./GlobalAccountButton-DLHTd1Ta.js";import"./Enter-CLpxMQoO.js";import"./GlobalMenuButton-DqPwGFaS.js";import"./MenuHamburger-Drn1nU86.js";import"./AccountSelector-DnNjsOoN.js";import"./Switch-DgDB3yiy.js";import"./AccountMenu-CaMcu7Ms.js";import"./GlobalMenu-B28H1ehD.js";import"./Checkmark-B9iR0FRr.js";import"./ArrowUndo-s8spIZZt.js";import"./Globe-DZKqbOWc.js";import"./BreadcrumbsLink-XcBs2lYi.js";import"./ArrowRight-Bj8RpLKd.js";import"./Footer-DawQ2f6l.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
