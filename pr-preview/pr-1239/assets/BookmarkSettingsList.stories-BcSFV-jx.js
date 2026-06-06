import{a7 as t}from"./iframe-azCfu0oF.js";import{B as a,u as n}from"./useBookmarks-CyOkLP9K.js";import{B as d}from"./BookmarkModal-DywYUdUu.js";import{L as c}from"./Layout-DYtuN4Mv.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BCjKWSQ9.js";import"./BookmarkSettingsItem-CWJf2Qrg.js";import"./QueryLabel-CWfxX5F4.js";import"./Plus-BRb5Dr-V.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./SettingsItemBase-QxuxVgeV.js";import"./ItemMedia-BlulKlBL.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./ChevronRight-DmbA9yvG.js";import"./ItemBase-DvAzRiVb.js";import"./ItemLink-iPqP_Q-k.js";import"./ItemControls-D1geOcjK.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./Typography-CWMVViTm.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./ContextMenu-B48YoW8-.js";import"./useDropdownMenuController-Ds5tbgH_.js";import"./Dropdown-CZ8Ag1Ok.js";import"./SearchField-BxcNLwFn.js";import"./FieldBase-CGNAcfuA.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuListHeading-Be6eRNXB.js";import"./MenuItem-DQe7kQkg.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./index-BVE0v-uN.js";import"./InformationSquare-jmbeCJCU.js";import"./MenuElipsisHorizontal-CTevO2o7.js";import"./Pencil-542yRJA3.js";import"./Trash-4gML0aCb.js";import"./SettingsModal-DgA94iaR.js";import"./ModalBody-DGD_YXs5.js";import"./Section-cdVnHieS.js";import"./Flex-Dtc9ln1d.js";import"./ButtonGroup-n2_tAFRz.js";import"./ButtonIcon-CwW43bfK.js";import"./ButtonLabel-C-fKFqCV.js";import"./TextField-i3cTYrXw.js";import"./SkipLink-Dd0mmfHI.js";import"./Banner-CAZ4bFf-.js";import"./GlobalHeader-Di3unPEh.js";import"./useIsDesktop-VQy6LI36.js";import"./GlobalAccountButton-CK8T4LQh.js";import"./Enter-tZOygt0a.js";import"./GlobalMenuButton-Cj8YDFpo.js";import"./MenuHamburger-8q16ML3A.js";import"./AccountSelector-BSoQQv0t.js";import"./Switch-CLshW7kB.js";import"./AccountMenu-l9LBS8EX.js";import"./GlobalMenu-gYE2kqRH.js";import"./ArrowUndo-DFHXaMj5.js";import"./Globe-fNOxnyKD.js";import"./BreadcrumbsLink-BjLFHRtF.js";import"./ArrowRight-2WuhP0xh.js";import"./Footer-DkE5zY5y.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
