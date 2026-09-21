import{a7 as o}from"./iframe-DJfn40-D.js";import{u as S}from"./useProfileLayout-CqKrzH1R.js";import{u as c,B as g}from"./useBookmarks-C9J86NDq.js";import{L as k}from"./Layout-DeQH63ds.js";import{P as x}from"./PageBase-Bj5M31uC.js";import{H as p}from"./Heading-DGmFcP6K.js";import{T as b}from"./Toolbar-DkOXbGD0.js";import{B as I}from"./BookmarkModal-Cc13AUEB.js";import{u as h}from"./useInboxLayout-CVCTcLov.js";import{u as f}from"./useAccountMenu-ClZjWjBM.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Btn5aJkM.js";import"./Bell-CbTQdXEK.js";import"./Bookmark-itB_FKUn.js";import"./ClockDashed-B53QxFKY.js";import"./globalMenu-ijxnBPIW.js";import"./PersonCircle-Bje06n3M.js";import"./Buildings2-DVUhB4_t.js";import"./InboxFill-C_cYdorl.js";import"./MenuGrid-CMTOGRfX.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DIb6mTzI.js";import"./Trash-QlCQ_OLM.js";import"./useLayout-6ZZdErlr.js";import"./useLocale-C3kyxvOC.js";import"./header-EnNiAGKo.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CxHWIKXS.js";import"./BookmarkSettingsItem-BwTvCXt6.js";import"./QueryLabel-Dkv8HuzX.js";import"./Plus-CBmVVX8g.js";import"./SettingsItemBase-Dvp7GxLZ.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./ChevronUp-CDdzZBKT.js";import"./ChevronDown-D_48qJ0I.js";import"./ChevronRight-DB6kCZkt.js";import"./ItemBase-BZeziJXo.js";import"./ItemLink-DnwAIVP3.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./Typography-XfwuV3u8.js";import"./useHighlightedText-Bup2uSoT.js";import"./ContextMenu-CaiQMd7K.js";import"./useDropdownMenuController-CsyOSzoH.js";import"./Dropdown-D88HD4zP.js";import"./SearchField-BCijVFY-.js";import"./FieldBase-D1U1BxD2.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuListDivider-D98MnUWk.js";import"./MenuListHeading-DOsHnXss.js";import"./MenuItem-BcYTRISI.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./InformationSquare-TILYX_Pd.js";import"./MenuElipsisHorizontal-BQYr1o0J.js";import"./Pencil-DBsrn80f.js";import"./SkipLink-B0RLkGat.js";import"./CookieBanner-CnLaRd5P.js";import"./Banner-BTSklFiS.js";import"./GlobalHeader-D5nRV2Yh.js";import"./useIsDesktop-RLD3NYM2.js";import"./GlobalAccountButton-B-3XKkAK.js";import"./Enter-D3OUH4Bc.js";import"./GlobalMenuButton-CHseIkzq.js";import"./MenuHamburger-C0Qf3lmv.js";import"./AccountSelector-BBqvPS7P.js";import"./Switch-BdNLaEmp.js";import"./AccountMenu-Dstivpuc.js";import"./GlobalMenu-DsSivbZT.js";import"./ArrowUndo-B2-52xOX.js";import"./Globe-DFC7DByl.js";import"./BreadcrumbsLink-C06X9E0X.js";import"./ArrowRight-MRvFTX7F.js";import"./Footer-DleAaVEF.js";import"./Flex-BuCXAFdl.js";import"./ButtonGroup-HFpGrSBK.js";import"./ButtonGroupDivider-B1RwbsMj.js";import"./ChevronUpDown-D_O75hLp.js";import"./ToolbarMenu-D_o4oXU9.js";import"./ToolbarSearch-rTgpQV-h.js";import"./SettingsModal-D-UeQJQp.js";import"./ModalBody-byCqzvmH.js";import"./Section-DRGrLW1j.js";import"./ButtonIcon-C08Tz3FQ.js";import"./ButtonLabel-D0AuKm4B.js";import"./TextField-Cn0Doatu.js";import"./inboxMenu-DUwjd6PQ.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
