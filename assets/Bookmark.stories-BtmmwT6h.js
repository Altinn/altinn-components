import{a7 as o}from"./iframe-BZiA3Dc9.js";import{u as S}from"./useProfileLayout-B02MUQLE.js";import{u as c,B as g}from"./useBookmarks-ByyY98rM.js";import{L as k}from"./Layout-Dh_gh_Ce.js";import{P as x}from"./PageBase-ChimEAJA.js";import{H as p}from"./Heading-DduTyBY0.js";import{T as b}from"./Toolbar-BZOC5y4s.js";import{B as I}from"./BookmarkModal-CIzNnwhY.js";import{u as h}from"./useInboxLayout-Dorb0b9O.js";import{u as f}from"./useAccountMenu-BtgIASri.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BEj4Jija.js";import"./Bell-Ca1iHeTq.js";import"./Bookmark-DaeAt-nZ.js";import"./ClockDashed-IS1yr7JH.js";import"./globalMenu-6JyMBhMd.js";import"./PersonCircle-C_-LNb0c.js";import"./Buildings2-BRuUUWGZ.js";import"./InboxFill-BCgBfUTn.js";import"./MenuGrid-DhGk5t1z.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BSbbJQpu.js";import"./Trash-DL-j6TXo.js";import"./useLayout--0xL-XzO.js";import"./useLocale-DGWmGDod.js";import"./header-597LU-In.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-S-ctNtGP.js";import"./BookmarkSettingsItem-JbahhOv0.js";import"./QueryLabel-DWtmKCRS.js";import"./Plus-DuB6ksxl.js";import"./SettingsItemBase-B0O87-qU.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./ChevronRight-CRJJFvsY.js";import"./ItemBase-DgeIJNcx.js";import"./ItemLink-essyEfxP.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./Typography-HNFVi96c.js";import"./useHighlightedText-gnIxErVs.js";import"./ContextMenu-98Gzvt6m.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./FieldBase-ueusd3rP.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./InformationSquare-mZWip9WA.js";import"./MenuElipsisHorizontal-C2yCxxi6.js";import"./Pencil-neK5KHtm.js";import"./SkipLink-DWgdd-GE.js";import"./Banner-BtKZ61By.js";import"./GlobalHeader-Cu8SF1ir.js";import"./useIsDesktop-CSl4XLc7.js";import"./GlobalAccountButton-UsxKQVTG.js";import"./Enter-D45C4ZyH.js";import"./GlobalMenuButton-Du8ecgvS.js";import"./MenuHamburger-CH0SCgCh.js";import"./AccountSelector-B3eiELKb.js";import"./Switch-BcTJiZEX.js";import"./AccountMenu-C_iFW4C2.js";import"./GlobalMenu-DkcK29pl.js";import"./ArrowUndo-DmjPkDTA.js";import"./Globe-D2JmmsD8.js";import"./BreadcrumbsLink-BfnL9fjg.js";import"./ArrowRight-W2FxJoMq.js";import"./Footer-BELR6Sl2.js";import"./Flex-DlKNIBbG.js";import"./ButtonGroup-CQ4JbS4J.js";import"./ButtonGroupDivider-CyCQJaDt.js";import"./ChevronUpDown-DVPIS2tN.js";import"./ToolbarMenu-DvNQ0jha.js";import"./ToolbarSearch-D5I768Wa.js";import"./SettingsModal-DmpepEFy.js";import"./ModalBody-CEOKzm3S.js";import"./Section-B5v4sxTq.js";import"./ButtonIcon-CMUqdBu-.js";import"./ButtonLabel-BZQLbjuh.js";import"./TextField-a1zywizD.js";import"./inboxMenu-Bx4GdxCf.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
