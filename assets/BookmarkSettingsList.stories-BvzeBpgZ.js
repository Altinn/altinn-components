import{j as t}from"./iframe-aW2Ivac6.js";import{B as a,u as n}from"./useBookmarks-DsWOMvKj.js";import{L as c}from"./Layout-DrkwdCYs.js";import{B as d}from"./BookmarkModal-B9VObRun.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-X5QX7qeT.js";import"./QueryLabel-XalgUo1y.js";import"./Plus-Cg6CWYTT.js";import"./useId-DH4aqM3h.js";import"./Heading-D9dg30ti.js";import"./index-DWa6FdCb.js";import"./useHighlightedText-ZQImmj57.js";import"./Skeleton-it7stJ0Q.js";import"./SettingsItemBase-CJB5-OJo.js";import"./ChevronUp-Cb22o5aT.js";import"./ChevronDown-B1Tnrqm5.js";import"./ChevronRight-Bcq_DMzy.js";import"./ItemLink-BWqCuyi6.js";import"./ItemMedia-D2IPLDQS.js";import"./XMark-DUdkEKb2.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./ItemControls-BfAmDR5q.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./Typography-JHHWywcS.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./ContextMenu-CG5GStLp.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Dropdown-BOvlApQ8.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./MenuElipsisHorizontal-DY0_PRao.js";import"./SearchField-uUwTRA3v.js";import"./FieldBase-CdSvcvFX.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./Checkmark-BjMWNebU.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./Pencil-DsLeHOVK.js";import"./Trash-C236s4up.js";import"./SkipLink-Bn_vSWU3.js";import"./Banner-8CVvg8HE.js";import"./GlobalHeader-Nq92m6iw.js";import"./useIsDesktop-BJdF2eFD.js";import"./GlobalAccountButton-umDbm3Xt.js";import"./Enter-BUtIy1kW.js";import"./GlobalMenuButton-CNxrmuou.js";import"./MenuHamburger-5ynA6oKg.js";import"./AccountSelector-CaMR5UnS.js";import"./heading-CgRl8HZA.js";import"./AccountMenu-BtfjiIyK.js";import"./Switch-T1wAkZbR.js";import"./GlobalMenu-BlHoO1Ht.js";import"./ArrowUndo-BdzRHxUS.js";import"./Globe-B2KtByVs.js";import"./BreadcrumbsLink-V8iO21Ls.js";import"./ArrowRight-DG3uu7SN.js";import"./Footer-DX_UAj2b.js";import"./SettingsModal-Dm03By8e.js";import"./ModalBody-_o4wF_hP.js";import"./Section-BsfLh2yG.js";import"./Flex-CJSQwJ4K.js";import"./ButtonGroup-BjSwpoTC.js";import"./ButtonIcon-CYRzucye.js";import"./ButtonLabel-DF873RLr.js";import"./TextField-D-EqANfy.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
