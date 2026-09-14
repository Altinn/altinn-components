import{a7 as t}from"./iframe-BmEoWqRz.js";import{B as a,u as n}from"./useBookmarks-DJXnTJEb.js";import{B as d}from"./BookmarkModal-CLsVIfan.js";import{L as c}from"./Layout-DQr2Y4nA.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C68PXoRq.js";import"./BookmarkSettingsItem-B8KMWsPO.js";import"./QueryLabel-CX7vBwL-.js";import"./Plus-BvGVmtNu.js";import"./Heading-CSNATJ_q.js";import"./useHighlightedText-_GRR2uH-.js";import"./SettingsItemBase-D04YoY0W.js";import"./ItemMedia-Db3gcn7a.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./ChevronUp-BklxGwTc.js";import"./ChevronDown-5iss_T7m.js";import"./ChevronRight-CG1CTQrY.js";import"./ItemBase-C6W6-0wj.js";import"./ItemLink-Bn8J_UL7.js";import"./ItemControls-Y4OIpieN.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./Typography-BVfh1yLf.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./ContextMenu-CA9PQsOj.js";import"./useDropdownMenuController-D-8bCjIT.js";import"./Dropdown-DCNQ961w.js";import"./SearchField-C1uLMLLi.js";import"./FieldBase-T_Ol0Ej6.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./Input-DDCcqldd.js";import"./MenuListItem-B5VngT1X.js";import"./MenuListDivider-FJd_PUPB.js";import"./MenuListHeading-md5j_QVK.js";import"./MenuItem-BdKylwZo.js";import"./Checkmark-D1L9L_AM.js";import"./ItemLabel-Aob4vZQG.js";import"./InformationSquare-CFFqTuvm.js";import"./MenuElipsisHorizontal-CCU4AlZR.js";import"./Pencil-DC81L2T6.js";import"./Trash-CiLYMzmu.js";import"./SettingsModal-CFu-CX2C.js";import"./ModalBody-CAKbVWLZ.js";import"./Section-BwWH83Jj.js";import"./Flex-CErGdajF.js";import"./ButtonGroup-Bag4W9on.js";import"./ButtonIcon-Bl6aXluP.js";import"./ButtonLabel-BEXQQUYk.js";import"./TextField-CsO8fcEe.js";import"./SkipLink-BNiVU0wy.js";import"./CookieBanner-BeaXcAy_.js";import"./Banner-DZr00KuY.js";import"./GlobalHeader-B-zsFnXA.js";import"./useIsDesktop-mX8T95zL.js";import"./GlobalAccountButton-ChMPsHEp.js";import"./Enter-CNd-1-l1.js";import"./GlobalMenuButton-C9iLcIBI.js";import"./MenuHamburger-BSi0IvEo.js";import"./AccountSelector-Bl4089-N.js";import"./Switch-ChQjVpEb.js";import"./AccountMenu-fhq_23kZ.js";import"./GlobalMenu-oEN7-nvG.js";import"./ArrowUndo-DsIRF6CE.js";import"./Globe-Bl42L9Fa.js";import"./BreadcrumbsLink-Bvujkpkg.js";import"./ArrowRight-BOYOIiy2.js";import"./Footer-CQ24af--.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
