var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-CplFPuE2.js";import{B as a,u as d}from"./useBookmarks-Dc15xF9Q.js";import{B as l}from"./BookmarkModal-BPl6bi1H.js";import{L as u}from"./Layout-DP26g9fu.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Ct0wDmor.js";import"./BookmarkSettingsItem-D5oM49gi.js";import"./QueryLabel-6LqZJ8mQ.js";import"./Plus-Cjvj3mBz.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./SettingsItemBase-CnCqpkD_.js";import"./ItemMedia-BtRJ3M2I.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";import"./ItemBase-D8QKfK-5.js";import"./ItemLink-BYmj_1KC.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./Typography-pPFkmvZJ.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./ContextMenu-CvyTDIiz.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./SearchField-4LhcGogw.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./FieldBase-BHrQkTmp.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";import"./MenuElipsisHorizontal-DQHYA2e7.js";import"./Pencil-CB0Mn6gK.js";import"./Trash-DVLYtG5v.js";import"./SettingsModal-xBJrpL7h.js";import"./ModalBody-BJDu01Be.js";import"./Section-CaXjLAlu.js";import"./Flex-CoXKQauA.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonIcon-B77pSTxU.js";import"./ButtonLabel-Bdm9dHON.js";import"./TextField-DkVZ8i71.js";import"./SkipLink-sK2faEPI.js";import"./CookieBanner-BgZliC6U.js";import"./Link-CMftgIk_.js";import"./Banner-CzeU5Q0W.js";import"./GlobalHeader-SKQU1uDp.js";import"./useIsDesktop-CmVRZlHm.js";import"./GlobalAccountButton-BERkiVLH.js";import"./Enter-Cwjyt1wf.js";import"./GlobalMenuButton-BNydYUFB.js";import"./MenuHamburger-BPHgOQ4b.js";import"./AccountSelector-BI05tbaS.js";import"./Switch-Bduvd3lO.js";import"./AccountMenu-BTd4-rYQ.js";import"./GlobalMenu-C49hRwgU.js";import"./ArrowUndo-D1R9ATiN.js";import"./Globe-N6PuO_kS.js";import"./BreadcrumbsLink-BPjCl2zG.js";import"./ArrowRight-BZ_DNn6R.js";import"./Footer-BSpnSp3p.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
