var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-CtXhLetY.js";import{B as n,u as d}from"./useBookmarks-KOYYpDKa.js";import{B as l}from"./BookmarkModal-xNSJZ_PY.js";import{L as u}from"./Layout-MGdRDENj.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BNTP8R_q.js";import"./BookmarkSettingsItem-BtAIX25X.js";import"./QueryLabel-CAwshzuA.js";import"./Plus-CaMrdVwa.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./SettingsItemBase-DJ85t7zR.js";import"./ItemMedia-BiJdsWyj.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./ChevronUp-7x0YByos.js";import"./ChevronDown-ChgXhb0d.js";import"./ChevronRight-S5R-64jg.js";import"./ItemBase-DZnnQWR_.js";import"./ItemLink-DjxEH_jH.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./Typography-BeyzbKvD.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./ContextMenu-prDkaT0d.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./SearchField-DGLH3IXX.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./FieldBase-CnqvqYs3.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";import"./MenuElipsisHorizontal-Cc3YoMLz.js";import"./Pencil-C83C9SiU.js";import"./Trash-BBjuHv-u.js";import"./SettingsModal-C_c01Qjn.js";import"./ModalBody-Bv_B0VCd.js";import"./Section-BY6ZWS4H.js";import"./Flex-B2jEbRqX.js";import"./ButtonGroup-BWN2lsHW.js";import"./ButtonIcon-c1Jmgrga.js";import"./ButtonLabel-BHl8q492.js";import"./TextField-0YAEkQ2-.js";import"./SkipLink-aKUarX7w.js";import"./CookieBanner-DAjzF8he.js";import"./Link-I9Yd2azp.js";import"./Banner-C8RGc_Vu.js";import"./GlobalHeader-D0IWotA8.js";import"./useIsDesktop-D8Kv6d5F.js";import"./GlobalAccountButton-VwHnMVoD.js";import"./Enter-CC4aa7RX.js";import"./GlobalMenuButton-BUdxG7sq.js";import"./MenuHamburger-ClUS-mp3.js";import"./AccountSelector-CBgCTQdO.js";import"./Switch-F7ErxPBD.js";import"./AccountMenu-DzcUfmvZ.js";import"./GlobalMenu-fucqRSZu.js";import"./ArrowUndo-z5PUo7n9.js";import"./Globe-CRscLQGE.js";import"./BreadcrumbsLink-CMSo1muQ.js";import"./ArrowRight-BEFYgB7Z.js";import"./Footer-BkTlZtZM.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const _o=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
