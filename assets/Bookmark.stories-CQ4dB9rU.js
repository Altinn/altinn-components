import{a7 as o}from"./iframe-DWR_BPge.js";import{u as S}from"./useProfileLayout-CsjetLB9.js";import{u as c,B as g}from"./useBookmarks-DjtHQlBm.js";import{L as k}from"./Layout-DTTJ7Xp4.js";import{P as x}from"./PageBase-DT7QQcgC.js";import{H as p}from"./Heading-DZv3ITVf.js";import{T as b}from"./Toolbar-CVDPeYru.js";import{B as I}from"./BookmarkModal-j2u8UuIC.js";import{u as h}from"./useInboxLayout-BchKQ2iD.js";import{u as f}from"./useAccountMenu-BUhzrhNb.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-fRtY9Ved.js";import"./Bell-CNwaOF5z.js";import"./Bookmark-CIzhTlww.js";import"./ClockDashed-BuHgNuyH.js";import"./globalMenu-yo8b4zDp.js";import"./PersonCircle-DvPby5ZL.js";import"./Buildings2-Bsk7OURA.js";import"./InboxFill-BSccVKoO.js";import"./MenuGrid-DM9DMxk5.js";import"./MagnifyingGlass-G_PIqG58.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-t07JtCRk.js";import"./Trash-D3VLDrQo.js";import"./useLayout-CQS2umG3.js";import"./useLocale-DJa2LSIP.js";import"./header-DAalrbo9.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D6mVZHWX.js";import"./BookmarkSettingsItem-LEQ7ilyA.js";import"./QueryLabel-BwIEHFu9.js";import"./Plus-F3v00gKT.js";import"./SettingsItemBase-ucDTJ2CS.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./ContextMenu-DE4xWtGE.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./FieldBase-BMAVe4Iy.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./MenuElipsisHorizontal-DiWRRmpM.js";import"./Pencil-BslVK5Li.js";import"./SkipLink-D0EPO6S4.js";import"./Banner-CCPjbEN-.js";import"./GlobalHeader-BYtDyOx9.js";import"./useIsDesktop-DdH_mZZT.js";import"./GlobalAccountButton-DUBOmq2b.js";import"./Enter-BY3t1N2F.js";import"./GlobalMenuButton-BTKROSAX.js";import"./MenuHamburger-LlREICSw.js";import"./AccountSelector-BBcM0hG1.js";import"./Switch-Cw7BxWBg.js";import"./AccountMenu-9n885YDY.js";import"./GlobalMenu-DyiBiW-8.js";import"./ArrowUndo-DNQ5VHUr.js";import"./Globe-C2nJg-Wj.js";import"./BreadcrumbsLink-DNn7cUlp.js";import"./ArrowRight-BDGEOzRy.js";import"./Footer-zRZEA-p5.js";import"./Flex-6ZJb0CGr.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonGroupDivider-D4r8VyyV.js";import"./ChevronUpDown-CEWdRwRE.js";import"./ToolbarMenu-Ba6pimK-.js";import"./ToolbarSearch-D6eldHRT.js";import"./SettingsModal-B9paxYpJ.js";import"./ModalBody-TFV96CG9.js";import"./Section-BCFzX2B1.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";import"./TextField-CnsffK4d.js";import"./inboxMenu-Bw9GXWAI.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
