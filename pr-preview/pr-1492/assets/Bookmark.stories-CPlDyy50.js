var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-B3JK86DP.js";import{u as j}from"./useProfileLayout-CJylHNOH.js";import{u as g,B as x}from"./useBookmarks-M4udAsK6.js";import{L as k}from"./Layout-CIgk6UxX.js";import{P as b}from"./PageBase-CkRy7mD1.js";import{H as m}from"./Heading-DhZTTpsP.js";import{T as I}from"./Toolbar-ChlnkDCe.js";import{B as h}from"./BookmarkModal-D5gsJZhK.js";import{u as C}from"./useInboxLayout-CenjQSYj.js";import{u as y}from"./useAccountMenu-B0MPCcV8.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BCuk1aAg.js";import"./Bell-JxqnLWQM.js";import"./Bookmark-BNWrj_cZ.js";import"./ClockDashed-DDD5Czsn.js";import"./globalMenu-ZlvOBH04.js";import"./PersonCircle-CbyNMypj.js";import"./Buildings2-bc0yLADC.js";import"./InboxFill-ijG3Dsww.js";import"./MenuGrid-DKi9-mwC.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DGM3iS45.js";import"./Trash-XyOTEtSX.js";import"./useLayout-DgZpZST_.js";import"./useLocale-U5LT0tDJ.js";import"./header-DKY8cYu5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-RTLBsPgV.js";import"./BookmarkSettingsItem-Ba2g_hcu.js";import"./QueryLabel-BBA5vD7o.js";import"./Plus-UzcieS8Z.js";import"./SettingsItemBase-CH16isHl.js";import"./ItemMedia-w7Ibrgnv.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./ChevronUp-2E8wLm1d.js";import"./ChevronDown-eXgBXwsS.js";import"./ChevronRight-CXXN68ww.js";import"./ItemBase-CVpq_C38.js";import"./ItemLink-CI8JhxFv.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./Typography-AZ3lf-vT.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ContextMenu-B2Ts5CPe.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemLabel-UJIDw8s4.js";import"./FieldBase-BOLpoc-t.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./InformationSquare-DD61y5yY.js";import"./Pencil-8zXpV1nV.js";import"./SkipLink-RCbbMY4N.js";import"./CookieBanner-DeF8tbcP.js";import"./Link-nyBdqDjQ.js";import"./Banner-EMpRl99Y.js";import"./GlobalHeader-B4i6zyAh.js";import"./useIsDesktop-CV7gQySW.js";import"./GlobalAccountButton-CWuo16M7.js";import"./Enter-Bmsepcvu.js";import"./GlobalMenuButton-DlkSCuXD.js";import"./MenuHamburger-buk28FFl.js";import"./AccountSelector-B9RDvL4R.js";import"./Switch-CIsn3VnQ.js";import"./AccountMenu-DHPdtaaD.js";import"./GlobalMenu-DNbtyV0e.js";import"./Checkmark-BlaG2503.js";import"./ArrowUndo-akLfJpcJ.js";import"./Globe-CITtRZvC.js";import"./BreadcrumbsLink-CVLW5LEg.js";import"./ArrowRight-DDv59QSS.js";import"./Footer-SU54PDkp.js";import"./Flex-DTtFl6cz.js";import"./ButtonGroup-svkpHY7L.js";import"./ButtonGroupDivider-DWsNC7FQ.js";import"./ChevronUpDown-CboAF3zA.js";import"./ToolbarMenu-BD3nheYo.js";import"./ToolbarSearch-DDx5hvDF.js";import"./SettingsModal-DE14g6gU.js";import"./ModalBody-CwO02btK.js";import"./Section-DBrjPmQz.js";import"./ButtonIcon-CL9cJJTZ.js";import"./ButtonLabel-BWRZYF93.js";import"./TextField-Cntgt9Iw.js";import"./inboxMenu-BetaJs6I.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
