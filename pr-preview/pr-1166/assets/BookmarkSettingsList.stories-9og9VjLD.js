import{j as t}from"./iframe-u1jxS1Oq.js";import{B as a,u as n}from"./useBookmarks-CvarMnXj.js";import{L as c}from"./Layout-DJnOPMDH.js";import{B as d}from"./BookmarkModal-CbfcA4AL.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CjSLdTf-.js";import"./index-CuIYfQx6.js";import"./SettingsSection-DEe1n_Kn.js";import"./Section-Dvplgvae.js";import"./BookmarkSettingsItem-BNhQOyWu.js";import"./QueryLabel-DUYo15Ow.js";import"./Plus-DDBVjJkP.js";import"./useId-MxiBxM6f.js";import"./Heading-B6H8IHeT.js";import"./useHighlightedText-Cgx_Ij05.js";import"./Skeleton-vSjDGrjA.js";import"./SettingsItemBase-DcS_4Gld.js";import"./ChevronUp-D1SaIjFK.js";import"./ChevronDown-CLYLhVpz.js";import"./ChevronRight-Dx4m7R44.js";import"./ItemLink-kNypsHgk.js";import"./ItemMedia-Dn5ydfd9.js";import"./XMark-Bsujigqn.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./ItemControls-GTSartAy.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./Typography-DJdlSKXp.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./ContextMenu-1wVNrnh1.js";import"./useDropdownMenuController-CqFMkV_m.js";import"./Dropdown-CanQZVjK.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./MenuElipsisHorizontal-BgSAjww8.js";import"./SearchField-BwnvpNr2.js";import"./FieldBase-BcXnInHB.js";import"./Label-D4ujXpAq.js";import"./index-Cx6LUCQB.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./MenuItem-CRFWvbZF.js";import"./Checkmark-CapblMXW.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./List-C92-pb3T.js";import"./ListItem-jEtnNQRv.js";import"./Divider-DwqD2ecz.js";import"./Pencil-DfgYNT6U.js";import"./Trash-DU2X0jmR.js";import"./SkipLink-C5dx5MkW.js";import"./Banner-DV6Zm_cR.js";import"./GlobalHeader-BKnQqELZ.js";import"./useIsDesktop-BUpuOEpy.js";import"./GlobalAccountButton-B4zbMdHn.js";import"./Enter-Cwv7FqNn.js";import"./GlobalMenuButton-UkP6H3yi.js";import"./MenuHamburger-DqxEpoux.js";import"./AccountSelector-BvHpQi_k.js";import"./heading-D19-APkd.js";import"./AccountMenu-a2z5uoQ3.js";import"./Switch-D4bzAeVp.js";import"./GlobalMenu-CrZjzRcF.js";import"./ArrowUndo-B6TGv3ww.js";import"./Globe-CdLBF7ZI.js";import"./BreadcrumbsLink-Db4kZiva.js";import"./ArrowRight-D0n3RDnn.js";import"./Footer-Bvf5IPwi.js";import"./SettingsModal-CCm32NkT.js";import"./ModalBody-B6zTqt0m.js";import"./ButtonGroup-DTQJ7yTP.js";import"./ButtonIcon-B-G62crO.js";import"./ButtonLabel--2iSlRcT.js";import"./TextField-j_RgJ9ji.js";const Do={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ho=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ho as __namedExportsOrder,Do as default};
