var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DKOj4Qmf.js";import{u as j}from"./useProfileLayout-0eum3Fs0.js";import{u as g,B as x}from"./useBookmarks-CB22odBO.js";import{L as k}from"./Layout-C77_zlI3.js";import{P as b}from"./PageBase-B2Ee9Al7.js";import{H as m}from"./Heading-CZ9YFV1k.js";import{T as I}from"./Toolbar-Ch5lZRFX.js";import{B as h}from"./BookmarkModal-WrEx5hyN.js";import{u as C}from"./useInboxLayout-Cb7HYOEV.js";import{u as y}from"./useAccountMenu-DkSxoiko.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-TMgHEMWw.js";import"./Bell-D-w-Z2hb.js";import"./Bookmark-DtUUxBWC.js";import"./ClockDashed-J0wFRlbL.js";import"./globalMenu-Bgwguyyv.js";import"./PersonCircle-B-YmhkaA.js";import"./Buildings2-wb5ZIU2b.js";import"./InboxFill-DlN-FcL8.js";import"./MenuGrid-DtqF4QVd.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BdzDAVfI.js";import"./Trash-BH2M-vSd.js";import"./useLayout-KPAgcc6H.js";import"./useLocale-Ba1i3mzS.js";import"./header-DFSjGhev.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CQyV1KVq.js";import"./BookmarkSettingsItem-B6BWugkw.js";import"./QueryLabel-upp7ZRLH.js";import"./Plus-CFLLX51l.js";import"./SettingsItemBase-C5KqK7Hg.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ChevronUp-C6mjAtW4.js";import"./ChevronDown-E0Mu4V8Q.js";import"./ChevronRight-BtINKUzX.js";import"./ItemBase-DvuL1i9R.js";import"./ItemLink-5KzMXfWD.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./Typography-eLs7BNQP.js";import"./useHighlightedText-C5BJuUZa.js";import"./ContextMenu-Bt2Mhw14.js";import"./useDropdownMenuController-CcFtrCc1.js";import"./Dropdown--jVfBx7U.js";import"./SearchField-TPXYOreq.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemLabel-CcblWyxm.js";import"./FieldBase-B2rDpv5b.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./InformationSquare-CC_FvbA-.js";import"./Pencil-BZ_WJsRY.js";import"./SkipLink-Dd2TvshO.js";import"./CookieBanner-DQKUtDMx.js";import"./Link-Bf9h-zyq.js";import"./Banner-tfb5tHuB.js";import"./GlobalHeader-Ndrp0S0T.js";import"./useIsDesktop-ButgdWSM.js";import"./GlobalAccountButton-D0WFlV57.js";import"./Enter-h7bFRpOG.js";import"./GlobalMenuButton-DGjR9OMW.js";import"./MenuHamburger-biRJv-in.js";import"./AccountSelector-DVWTlh2e.js";import"./Switch-Bkx_nto1.js";import"./AccountMenu-Dihb_EuE.js";import"./GlobalMenu-DJxTXL6b.js";import"./Checkmark-DXw908H5.js";import"./ArrowUndo-Cs7Bhn7X.js";import"./Globe-CyCJXh5C.js";import"./BreadcrumbsLink-W4MU2AZQ.js";import"./ArrowRight-CsC-IM5g.js";import"./Footer-uc4Se_lB.js";import"./Flex-DwWkcKON.js";import"./ButtonGroup-tVuhtuMt.js";import"./ButtonGroupDivider-BfAaFqeD.js";import"./ChevronUpDown-B3dWux7v.js";import"./ToolbarMenu-B0rnYwvK.js";import"./ToolbarSearch-C_iN41wW.js";import"./SettingsModal-D9a2GTgV.js";import"./ModalBody-yuWxiPLa.js";import"./Section-DDkkqRz5.js";import"./ButtonIcon-BeQ87dMs.js";import"./ButtonLabel-TaOioUjS.js";import"./TextField-B092Moqu.js";import"./inboxMenu-BEjRP-ns.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
