var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DvHKorxQ.js";import{B as a,u as d}from"./useBookmarks-DopJtrJY.js";import{B as l}from"./BookmarkModal-DiXD4NXy.js";import{L as u}from"./Layout-BGOJc8X0.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DmIIMIa0.js";import"./BookmarkSettingsItem-CINSTTY9.js";import"./QueryLabel-C2HqkzaP.js";import"./Plus-BlCIA3TM.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./SettingsItemBase-Mas3T7p4.js";import"./ItemMedia-D3TRsre4.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./ChevronUp-CNwAnotn.js";import"./ChevronDown-CIQHUQdq.js";import"./ChevronRight-BUHnh-Yw.js";import"./ItemBase-CLKLcNMq.js";import"./ItemLink-rN7vy6V2.js";import"./ItemControls--z7ByJD8.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./Typography-CvxYC9sf.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./ContextMenu-kuvKn8Xt.js";import"./useDropdownMenuController-IkMO0B8E.js";import"./Dropdown-CZm18rgm.js";import"./SearchField-BU96PyeS.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemLabel-BPqR0X1V.js";import"./FieldBase-BZwhXyPC.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./InformationSquare-dQI1I0JD.js";import"./Pencil-CSaok8_Q.js";import"./Trash-DVfbPaj0.js";import"./SettingsModal-C5N8mowt.js";import"./ModalBody-C1im2bkm.js";import"./Section-C_0CdUSc.js";import"./Flex-DGnnEuV7.js";import"./ButtonGroup-HA7R6Ya1.js";import"./ButtonIcon-Ddz6f75V.js";import"./ButtonLabel-PIYJX3px.js";import"./TextField-uNMn-JJ9.js";import"./SkipLink-BsrasTA6.js";import"./CookieBanner-C89zACVF.js";import"./Link-f4TZXGvV.js";import"./Banner-CHcz1tE6.js";import"./GlobalHeader-Bm1pjFSp.js";import"./useIsDesktop-D_CwdmZf.js";import"./GlobalAccountButton-Dvkyq19P.js";import"./Enter-CbVInwau.js";import"./GlobalMenuButton-BIiZsZYy.js";import"./MenuHamburger-DBDIkqls.js";import"./AccountSelector-CqvFZ-x3.js";import"./Switch-DcMon32a.js";import"./AccountMenu-l_9YcMP5.js";import"./GlobalMenu-BKC0fVrL.js";import"./Checkmark-Cv0i3HMy.js";import"./ArrowUndo-q1AmrM8c.js";import"./Globe-BJ6hoLpR.js";import"./BreadcrumbsLink-BigUfgp2.js";import"./ArrowRight-WkZj4CZG.js";import"./Footer-Da4KN9d7.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
