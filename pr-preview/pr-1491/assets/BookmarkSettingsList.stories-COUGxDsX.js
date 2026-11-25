var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-C0_zUbkp.js";import{B as a,u as d}from"./useBookmarks-DuuNm53n.js";import{B as l}from"./BookmarkModal-B1y8a25w.js";import{L as u}from"./Layout-DmBB5N-6.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DkMnEsls.js";import"./BookmarkSettingsItem-BOu1CZ7S.js";import"./QueryLabel-Cd6PpVSK.js";import"./Plus-D_VIpiu1.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./SettingsItemBase-OKa48F71.js";import"./ItemMedia-Dqx0ptul.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./ChevronUp-Co9i1NxZ.js";import"./ChevronDown-C32tY52G.js";import"./ChevronRight-C6nH0agV.js";import"./ItemBase-aXWTGndk.js";import"./ItemLink-bqgEL1bC.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./Typography-CXAuaEKv.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./ContextMenu-CX1UDoiU.js";import"./useDropdownMenuController-XzV301bD.js";import"./Dropdown-DC94zabz.js";import"./SearchField-DNtOxHfE.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemLabel-9fWKgY8j.js";import"./FieldBase-BHBKFAe2.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./InformationSquare-CG3sxIst.js";import"./Pencil-C4I0kMrB.js";import"./Trash-1-5ygZCI.js";import"./SettingsModal-CGaVHdrR.js";import"./ModalBody-CFE-4c3O.js";import"./Section-De3iQrxY.js";import"./Flex-CfJLZ-_w.js";import"./ButtonGroup-Bj12kkXU.js";import"./ButtonIcon-CN-2Ge4q.js";import"./ButtonLabel-KTfZeThD.js";import"./TextField-DoRuDjwy.js";import"./SkipLink-Dm0Ae5xk.js";import"./CookieBanner-DbGDrJdt.js";import"./Link-CGeqcCdg.js";import"./Banner-DVkRGba_.js";import"./GlobalHeader-DHevhZzs.js";import"./useIsDesktop-KF_OKnzc.js";import"./GlobalAccountButton-EC8pNabB.js";import"./Enter-BA5cepcd.js";import"./GlobalMenuButton--DFb6lqD.js";import"./MenuHamburger-I_0J1-VZ.js";import"./AccountSelector-DBxkMqVm.js";import"./Switch-BJBwrzYu.js";import"./AccountMenu-B7S2sMdl.js";import"./GlobalMenu-BrdGem6M.js";import"./Checkmark-r_LW2Dwq.js";import"./ArrowUndo-BzebLQMk.js";import"./Globe-CaMonKWF.js";import"./BreadcrumbsLink-B5sXTC7A.js";import"./ArrowRight-CxiqIIv6.js";import"./Footer-CP-UON3r.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
