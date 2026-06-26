import{a7 as o}from"./iframe-BlxKDeRn.js";import{u as S}from"./useProfileLayout-DPs94DAa.js";import{u as c,B as g}from"./useBookmarks-efz-G8A2.js";import{L as k}from"./Layout-B73xvpB6.js";import{P as x}from"./PageBase-Cmun-k1L.js";import{H as p}from"./Heading-PlHpJzKQ.js";import{T as b}from"./Toolbar-20ioumdA.js";import{B as I}from"./BookmarkModal-CrivFy57.js";import{u as h}from"./useInboxLayout-CbgyI4II.js";import{u as f}from"./useAccountMenu-BsK4pHGo.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BTbB-gAd.js";import"./Bell-ByTLfBQm.js";import"./Bookmark-DUFswlK1.js";import"./ClockDashed-CAqZBcnZ.js";import"./globalMenu-BxKkjLdR.js";import"./PersonCircle-BtsQPujV.js";import"./Buildings2-Jl1T6NB-.js";import"./InboxFill-BUeC5avp.js";import"./MenuGrid-DiUPMqsB.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CMR8k7pg.js";import"./Trash-epouAA_y.js";import"./useLayout-DUiZwVlJ.js";import"./useLocale-265c0gCg.js";import"./header-DI7AbTrv.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BkS0Vn46.js";import"./BookmarkSettingsItem-DlhJwKt8.js";import"./QueryLabel-wjFaPa27.js";import"./Plus-D-AEmb15.js";import"./SettingsItemBase-D3DnnDxm.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./ChevronUp-BgX0VOdQ.js";import"./ChevronDown-DW-ZLG_4.js";import"./ChevronRight-DNG7F-LS.js";import"./ItemBase-C3ArhSiR.js";import"./ItemLink-CTQIRsl2.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./ContextMenu-DJmCRmo5.js";import"./useDropdownMenuController-_els-HSa.js";import"./Dropdown-CwQ5F4MG.js";import"./SearchField-CTOOlDoc.js";import"./FieldBase-_XE-YVEJ.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./InformationSquare-D-Ph66nw.js";import"./MenuElipsisHorizontal-Dj8zKARE.js";import"./Pencil-EaIkCZrK.js";import"./SkipLink-eav45shA.js";import"./Banner-BtnDPWVi.js";import"./GlobalHeader-C4HRPfH0.js";import"./useIsDesktop--Uj-L73j.js";import"./GlobalAccountButton-1OnJI3Rg.js";import"./Enter-B2Te9yrh.js";import"./GlobalMenuButton-q8sy_pc7.js";import"./MenuHamburger-BYEHlw1B.js";import"./AccountSelector-dVt603LR.js";import"./Switch-CR8TgQ3y.js";import"./AccountMenu-DDNzCUWV.js";import"./GlobalMenu-X9SaRmvB.js";import"./ArrowUndo-DQ842Ieg.js";import"./Globe-Bqpcj0j2.js";import"./BreadcrumbsLink-BKmKvpHc.js";import"./ArrowRight-D2xrV8w1.js";import"./Footer-DEuuu4V-.js";import"./Flex-ETYKhAb5.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonGroupDivider-BFRswpZA.js";import"./ChevronUpDown-Dd58bz3G.js";import"./ToolbarMenu-s_KCcZcj.js";import"./ToolbarSearch-CY6LsfTU.js";import"./SettingsModal-DtHl80GM.js";import"./ModalBody-BIhvolNB.js";import"./Section-phQiwh1A.js";import"./ButtonIcon-COE5rocZ.js";import"./ButtonLabel-Cw-39_hF.js";import"./TextField-D1EOpeD3.js";import"./inboxMenu-j70JXdMj.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
