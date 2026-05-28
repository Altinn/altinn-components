import{p as o}from"./iframe-43_RSSTf.js";import{u as S}from"./useProfileLayout-CTAGgiEq.js";import{u as c,B as g}from"./useBookmarks-CMdsGZ8U.js";import{L as k}from"./Layout-BVNQbp0-.js";import{P as x}from"./PageBase-YwOI6whh.js";import{H as p}from"./Heading-2vQl8tBj.js";import{T as b}from"./Toolbar-DnruR9N2.js";import{B as I}from"./BookmarkModal-CF3ak4nd.js";import{u as h}from"./useInboxLayout-T0md13eq.js";import{u as f}from"./useAccountMenu-C_gEjtMM.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CK5ZP6qh.js";import"./useId-BLkk23cI.js";import"./Bell-OuASsAUs.js";import"./Bookmark-Dm5c54YI.js";import"./ClockDashed-BtdrgYQX.js";import"./globalMenu-CYMl9fs2.js";import"./PersonCircle-5C7xLqsV.js";import"./Buildings2-Chbhwy3k.js";import"./InboxFill-LO64aqnK.js";import"./MenuGrid-DpPBmXDm.js";import"./MagnifyingGlass-Bf1420VU.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./useLayout-Nuqq7Pvf.js";import"./useLocale-D2MMdEwB.js";import"./header-BnA0__0d.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CLHDsGsG.js";import"./BookmarkSettingsItem-2J9HQwf8.js";import"./QueryLabel-CTYDh99p.js";import"./Plus-BQyf1Gxm.js";import"./SettingsItemBase-0pp7psHT.js";import"./ItemMedia-C7TJfaPW.js";import"./index-D9XEmR3s.js";import"./XMark-Baw5EL5c.js";import"./Avatar-B5wzfTza.js";import"./Skeleton-C5aNvb_u.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./ItemBase-ByoSv5t_.js";import"./ItemLink-NtTBDy97.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./tooltip-CaRi0lSN.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./ContextMenu-e6118nKX.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./Button-B83AdZGF.js";import"./SearchField-QwXAT1yz.js";import"./FieldBase-DaCzydfk.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./MenuElipsisHorizontal-DSMY0Bj5.js";import"./Pencil-DCFwUbSj.js";import"./SkipLink-5Bu7w2kZ.js";import"./Banner-CiIOW2zK.js";import"./GlobalHeader-CBGVi9UL.js";import"./useIsDesktop-CRlQyS-C.js";import"./GlobalAccountButton-l7w_Shmo.js";import"./Enter-DdOnloWp.js";import"./GlobalMenuButton-DBrFEzwi.js";import"./MenuHamburger-aTqKFAcp.js";import"./AccountSelector-CwVIiTFB.js";import"./Switch-YXKvHF1V.js";import"./AccountMenu-DCpMQtOk.js";import"./GlobalMenu-CwqY0ksZ.js";import"./ArrowUndo-B6CsLZ7N.js";import"./Globe-DE_rqwfk.js";import"./BreadcrumbsLink-9DU_cU_H.js";import"./ArrowRight-P2DRNMAa.js";import"./Footer-w3VzYZLG.js";import"./Flex-CbLPS6D2.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonGroupDivider-ClE2vyad.js";import"./ChevronUpDown-BESXpFlz.js";import"./ToolbarMenu-C0bIZ2gU.js";import"./ToolbarSearch-BdeQ_kzd.js";import"./SettingsModal-pzz_m3jh.js";import"./ModalBody-RXLH-EOA.js";import"./Section-i7Bzbjq_.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";import"./TextField-C2NHcdr5.js";import"./inboxMenu-D-tO22Js.js";const Ce={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Le=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Le as __namedExportsOrder,Ce as default};
