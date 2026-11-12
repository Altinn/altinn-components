var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CqoHfDH7.js";import{u as j}from"./useProfileLayout-D8WBau7t.js";import{u as g,B as x}from"./useBookmarks-dc2IVEW1.js";import{L as k}from"./Layout-CSUzQI7d.js";import{P as b}from"./PageBase-DbvnRoLj.js";import{H as m}from"./Heading-CDVcG6kV.js";import{T as I}from"./Toolbar-DqOfbzde.js";import{B as h}from"./BookmarkModal-CiggSHr5.js";import{u as C}from"./useInboxLayout-e4Zw-q4I.js";import{u as y}from"./useAccountMenu-C9Px9FrJ.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-B5r3HVdm.js";import"./Bell-1EBapfKe.js";import"./Bookmark-BOLbbqTe.js";import"./ClockDashed-wmdL0CKS.js";import"./globalMenu-C7MS5dOU.js";import"./PersonCircle-JGJi10OX.js";import"./Buildings2-jiqwiY34.js";import"./InboxFill-CbXG-sfC.js";import"./MenuGrid-CTbcWMRg.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BpmgVQNb.js";import"./Trash-DDnja0xf.js";import"./useLayout-1O80DLaO.js";import"./useLocale-8rWX-jAY.js";import"./header-BZI1U5Xj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DC909dob.js";import"./BookmarkSettingsItem-DUAhTy_T.js";import"./QueryLabel-5ur60BDf.js";import"./Plus-DQZnEDJR.js";import"./SettingsItemBase-CEruRLCu.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ChevronUp-BraeWy4W.js";import"./ChevronDown-CPg5ddv-.js";import"./ChevronRight-jzUrV1wz.js";import"./ItemBase-BUrta6st.js";import"./ItemLink-BmS9PXKb.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./Typography-rh9OwAWr.js";import"./useHighlightedText-CSyjuktp.js";import"./ContextMenu-8eaHwukY.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./SearchField-D-gn40zc.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemLabel-Bv-toCFX.js";import"./FieldBase-B4VpsYUB.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./InformationSquare-B2hWOsOH.js";import"./Pencil-Cydjce_N.js";import"./SkipLink-Ds2RcVLC.js";import"./CookieBanner-CFMBRXMy.js";import"./Link-DR6nrsxT.js";import"./Banner-DQu6A5-G.js";import"./GlobalHeader-DWRMPzkc.js";import"./GlobalAccountButton-BvEMjebp.js";import"./Enter-B9MAPnXr.js";import"./GlobalMenuButton-DiyANMBE.js";import"./MenuHamburger-DSLGNBpT.js";import"./AccountSelector-BvBz0nl7.js";import"./Switch-C1zqeT7L.js";import"./AccountMenu-Fh_lK1IK.js";import"./GlobalMenu-CxNL_K9P.js";import"./Checkmark-6oHZmwOe.js";import"./ArrowUndo-CAunjfEO.js";import"./Globe-C2Y4iZjS.js";import"./BreadcrumbsLink-UdHkGk6j.js";import"./ArrowRight-B2OtfF5b.js";import"./Footer-BIpaMByz.js";import"./Flex-zJBPm08F.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonGroupDivider-CW6_6-9r.js";import"./ChevronUpDown-CSOM-jEc.js";import"./ToolbarMenu-nPJI5_t4.js";import"./ToolbarSearch-Co1pCbtk.js";import"./SettingsModal-BNLp4N0e.js";import"./ModalBody-CiSC6mzB.js";import"./Section-DzgRr51L.js";import"./ButtonIcon-CRl4eaFH.js";import"./ButtonLabel-DpOqQbl0.js";import"./TextField-BTeXfEgc.js";import"./inboxMenu-Bx8kL7_l.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
