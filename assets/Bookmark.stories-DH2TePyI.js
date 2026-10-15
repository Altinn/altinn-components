var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-BaqLtPTs.js";import{u as j}from"./useProfileLayout-B3RvjFqn.js";import{u as g,B as k}from"./useBookmarks-D3zrRZpN.js";import{L as x}from"./Layout-YCw9v4AM.js";import{P as b}from"./PageBase-Bb2MxBE-.js";import{H as n}from"./Heading-CDNNIgnR.js";import{T as I}from"./Toolbar-Dj7s2NCM.js";import{B as h}from"./BookmarkModal-F6wWXWly.js";import{u as C}from"./useInboxLayout-CcJ47aYZ.js";import{u as y}from"./useAccountMenu-CvWXC7Fk.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CPcUQ6-X.js";import"./Bell-CGv0AZuk.js";import"./Bookmark-Dwo9t8XR.js";import"./ClockDashed-BYIidY84.js";import"./globalMenu-BJxx3Nmt.js";import"./PersonCircle-DIaPl2aF.js";import"./Buildings2-lP6nc3II.js";import"./InboxFill-D6lYg80m.js";import"./MenuGrid-BI7eNdS2.js";import"./MagnifyingGlass-D84zuplr.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DIUg_QcS.js";import"./Trash-DdPBT6N6.js";import"./useLayout-BDAHe1m1.js";import"./useLocale-DUUAIGHI.js";import"./header-BAfUQPIq.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C1bmwhZm.js";import"./BookmarkSettingsItem-CfpSUfxH.js";import"./QueryLabel-B_MiZMoU.js";import"./Plus-C5MYAhCf.js";import"./SettingsItemBase-BqOvTG08.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";import"./ChevronRight-Dg4XRKaD.js";import"./ItemBase-CZF7Y01p.js";import"./ItemLink-DASRyS3K.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./Typography-DwSVJfAa.js";import"./useHighlightedText-sWqW6aCW.js";import"./ContextMenu-BrVBWBa2.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./SearchField-BCMYwn2Y.js";import"./FieldBase-BEQqqs0u.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuListDivider-iw10_T6H.js";import"./MenuListHeading-Cp83ODWk.js";import"./MenuItem-D9hVuXrM.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./InformationSquare-DB9gl9c1.js";import"./MenuElipsisHorizontal-VAfXYfAO.js";import"./Pencil-CeiyYpCD.js";import"./SkipLink-DmI-ASGR.js";import"./CookieBanner-CCmHrdLD.js";import"./Banner-C1HX02Xb.js";import"./GlobalHeader-BlNn5riX.js";import"./useIsDesktop-DA4wHaly.js";import"./GlobalAccountButton-C3nBJomz.js";import"./Enter-B84KAbyR.js";import"./GlobalMenuButton-BpQWntjE.js";import"./MenuHamburger-Be95533-.js";import"./AccountSelector-DlukmgXm.js";import"./Switch-cEGCs3Qc.js";import"./AccountMenu-DuSeNgSJ.js";import"./GlobalMenu-Cb-JaOpc.js";import"./ArrowUndo-pSENVqmS.js";import"./Globe-V7uKo-Sp.js";import"./BreadcrumbsLink-Dy1lwRL_.js";import"./ArrowRight-CV47hUo5.js";import"./Footer-C9pBl0qR.js";import"./Flex-DAfEpjHq.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonGroupDivider-B_4k_KaA.js";import"./ChevronUpDown-BFdCo8HA.js";import"./ToolbarMenu-D6_pLKVW.js";import"./ToolbarSearch-BpBZ8xn1.js";import"./SettingsModal-1p4U1o-8.js";import"./ModalBody-n_1CR2eM.js";import"./Section-C__1PXg0.js";import"./ButtonIcon-vCCOEFdH.js";import"./ButtonLabel-CYdCAiFt.js";import"./TextField-C8XNl_7d.js";import"./inboxMenu-BU083yRB.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
