var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-ZrU_khjL.js";import{B as a,u as d}from"./useBookmarks-DiSTW90Z.js";import{B as l}from"./BookmarkModal-DeYy3_SA.js";import{L as u}from"./Layout-BpdryenR.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1AoRPPj.js";import"./BookmarkSettingsItem-ZUh_6zsV.js";import"./QueryLabel-B0LcXmUe.js";import"./Plus-DonfkQJy.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./SettingsItemBase-C8UblevF.js";import"./ItemMedia-RrQv9WL4.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ChevronUp-CSSlqESb.js";import"./ChevronDown-BB20zuC9.js";import"./ChevronRight-I-BGQZW2.js";import"./ItemBase-CSRJSwJc.js";import"./ItemLink-iiWI53PI.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./Typography-FbkShcFO.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./ContextMenu-xJ1M0fI4.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./SearchField-BKf2_wz5.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemLabel-Dkx3E56O.js";import"./FieldBase-Bti6f0lr.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./InformationSquare-v_Dcjud5.js";import"./Pencil-BYYSEeIL.js";import"./Trash-D_09wouA.js";import"./SettingsModal-jqhIWQgm.js";import"./ModalBody-CLgzlTKt.js";import"./Section-dsTDEP7F.js";import"./Flex-DJ1B1xxZ.js";import"./ButtonGroup-5s3aXo0U.js";import"./ButtonIcon-DcntwKuS.js";import"./ButtonLabel-CQpgzAD-.js";import"./TextField-Dy170aXJ.js";import"./SkipLink-BdmTHMy_.js";import"./CookieBanner-CAcj-FZO.js";import"./Link-BZaMHpGV.js";import"./Banner-CPL97lia.js";import"./GlobalHeader-CYt7SSdw.js";import"./useIsDesktop-v0h-kR2t.js";import"./GlobalAccountButton-C1FVFYdc.js";import"./Enter-C2hxxdFf.js";import"./GlobalMenuButton-BzlllpjY.js";import"./MenuHamburger-Bmp7ovD_.js";import"./AccountSelector-BMF--fBy.js";import"./Switch-BdFzWZ9v.js";import"./AccountMenu-CzF8GbtV.js";import"./GlobalMenu-DuXi0wGS.js";import"./Checkmark-CeGyim3w.js";import"./ArrowUndo-DApzQjif.js";import"./Globe-FslnJAPK.js";import"./BreadcrumbsLink-C9H93YOO.js";import"./ArrowRight-zE1jOLWI.js";import"./Footer-CalvC98I.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
