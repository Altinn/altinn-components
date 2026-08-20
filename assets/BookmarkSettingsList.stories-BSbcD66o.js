import{a7 as t}from"./iframe-CfUrJ-sW.js";import{B as a,u as n}from"./useBookmarks-DocH0zt1.js";import{B as d}from"./BookmarkModal-D0khMjVZ.js";import{L as c}from"./Layout-Bil_AZO5.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-VNE_nv00.js";import"./BookmarkSettingsItem-BZZ5aKm7.js";import"./QueryLabel-BkWZ3vRf.js";import"./Plus-hdfH71QK.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./SettingsItemBase-t0GeXdqv.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./ChevronUp-rhZxrOkp.js";import"./ChevronDown-BqQbWOs1.js";import"./ChevronRight-BQqjok9o.js";import"./ItemBase-CCya3J9r.js";import"./ItemLink-_OyNsa5a.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./Typography-CAlmT_0b.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./ContextMenu-NIUZQkjq.js";import"./useDropdownMenuController-BagG9o2A.js";import"./Dropdown-Dwhf6SNg.js";import"./SearchField-D230b6Yn.js";import"./FieldBase-CrwLGD3E.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./InformationSquare-BZJWkHLO.js";import"./MenuElipsisHorizontal-DNQyfiZ2.js";import"./Pencil-OHQPb_ei.js";import"./Trash-4BxU-ya0.js";import"./SettingsModal-C0lARV3s.js";import"./ModalBody-BTkCYeJ8.js";import"./Section-CnfuXcY3.js";import"./Flex-DpzfZDgd.js";import"./ButtonGroup-9eoCQEvr.js";import"./ButtonIcon-CzpTDJ2F.js";import"./ButtonLabel-ChaENXy3.js";import"./TextField-0bvajYTU.js";import"./SkipLink-DGjmzuof.js";import"./CookieBanner-DTijFDql.js";import"./Banner-BGFyNT7Z.js";import"./GlobalHeader-DAjm9Rgo.js";import"./useIsDesktop-EUyJ7Rb8.js";import"./GlobalAccountButton-giQ1XW_l.js";import"./Enter-SQD6s3z_.js";import"./GlobalMenuButton-DDBjx-Lc.js";import"./MenuHamburger-HF5Rvs2-.js";import"./AccountSelector-CFo21Sbu.js";import"./Switch-BF3XxZeS.js";import"./AccountMenu-DN41d1Ye.js";import"./GlobalMenu-3rOHIzxk.js";import"./ArrowUndo-B07mJyDj.js";import"./Globe-CHeOGe9p.js";import"./BreadcrumbsLink-Y8DFAxAq.js";import"./ArrowRight-D1yP_5S1.js";import"./Footer-Cz8S3nNy.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
