import{j as t}from"./iframe-xsOFb0qB.js";import{B as a,u as n}from"./useBookmarks-Bt5Hm3Fy.js";import{L as c}from"./Layout-63w11HZc.js";import{B as d}from"./BookmarkModal-DCiUs8R9.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DwtqdLCy.js";import"./QueryLabel-Dh4OgX92.js";import"./Plus-CO7gw69x.js";import"./useId-BSkX16Wf.js";import"./Heading-CKV0OzUJ.js";import"./index-C2Njje4x.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./SettingsItemBase-Bj8jNJ8o.js";import"./ChevronUp-DtTCTXgH.js";import"./ChevronDown-DgTX1k3o.js";import"./ChevronRight-C-KQY4Ee.js";import"./ItemLink-D5ErANnm.js";import"./ItemMedia-J6PAjnJS.js";import"./XMark-CIyVPbna.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./ItemControls-a4lEiOE5.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Typography-Bx2c3_US.js";import"./MagnifyingGlass--8bC5kd2.js";import"./ContextMenu-BmVXKH9P.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Dropdown-DSeVnfau.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./MenuElipsisHorizontal-KvoLWB-I.js";import"./SearchField-CkGqv4yc.js";import"./FieldBase-CVHmMMmY.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./Checkmark-Bxt0Ippd.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./Pencil-BlrCYHOq.js";import"./Trash-CZXvsvHs.js";import"./SkipLink-p0ZoOJBX.js";import"./Banner-CxykjrH7.js";import"./GlobalHeader-BNGWRcMX.js";import"./useIsDesktop-BOJmI6K-.js";import"./GlobalAccountButton-DLmWsdQk.js";import"./Enter-BCbm_6pK.js";import"./GlobalMenuButton-Nv-QckX_.js";import"./MenuHamburger-C-E3l7C-.js";import"./AccountSelector-CmriLCRY.js";import"./heading-CqwOf3GZ.js";import"./AccountMenu-CByUaCt_.js";import"./Switch-D_4hH0ed.js";import"./GlobalMenu-LDEud2c5.js";import"./ArrowUndo-Bgr0ttn6.js";import"./Globe-Bo46H1tU.js";import"./BreadcrumbsLink-BjSgfYGY.js";import"./ArrowRight-B1uo4i5X.js";import"./Footer-CZQuPie9.js";import"./SettingsModal-DY4S-rNA.js";import"./ModalBody-CU-34hyC.js";import"./Section-B92vWqdI.js";import"./Flex-D9aEciRT.js";import"./ButtonGroup-C6oYdo0U.js";import"./ButtonIcon-CgcH6LiT.js";import"./ButtonLabel-BYEs_GZq.js";import"./TextField-BfoCX5sC.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
