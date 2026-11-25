var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CmRPDbOf.js";import{u as j}from"./useProfileLayout-DhPTJvod.js";import{u as g,B as x}from"./useBookmarks-DLfibb1h.js";import{L as k}from"./Layout-iwrXuX5I.js";import{P as b}from"./PageBase-Cf8U6Wq_.js";import{H as m}from"./Heading-Bga8Ehqe.js";import{T as I}from"./Toolbar-Cxb-jRXx.js";import{B as h}from"./BookmarkModal-BSMZn9rK.js";import{u as C}from"./useInboxLayout-CIq9kj2X.js";import{u as y}from"./useAccountMenu-BYpZZcV3.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BrWfX2ow.js";import"./Bell-CcxSUtBz.js";import"./Bookmark-jlJzyw-m.js";import"./ClockDashed-DoZCcm3C.js";import"./localeSwitcher-C3Jstk8I.js";import"./InboxFill-C-y88DAH.js";import"./PersonGroup-DT6ZT_45.js";import"./MenuGrid-CHOSeooe.js";import"./MagnifyingGlass-CwhdRafK.js";import"./Buildings2-N07gQ7vJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Czt8xJzv.js";import"./Trash-BLtAnUoG.js";import"./useLayout-C26j3cNh.js";import"./useLocale-BFWthnKR.js";import"./header-FmwbDT6K.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dthlol8g.js";import"./BookmarkSettingsItem-BhlWEViW.js";import"./QueryLabel-BMHDr2yF.js";import"./Plus-BIlgSaK7.js";import"./SettingsItemBase-g7FynA0W.js";import"./ItemMedia-BANum1kS.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./ItemBase-BsdSxlJi.js";import"./ItemLink-BbfZb6VU.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./Typography-3Ni-pGxm.js";import"./useHighlightedText-DjvNujh0.js";import"./ContextMenu-Cbf9vWrX.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemLabel-S9If7Ew0.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./InformationSquare-CWm2kkCA.js";import"./Pencil-Df8AjcYs.js";import"./SkipLink-B2JVR-Og.js";import"./CookieBanner-DN9oxIAl.js";import"./Link-Di1sS5P3.js";import"./Banner-CHiyD-pJ.js";import"./GlobalHeader-C9_nPyrF.js";import"./useIsDesktop-BnBN7-h6.js";import"./GlobalAccountButton-CkZ1qyuA.js";import"./Enter-D9jMCMkR.js";import"./GlobalMenuButton-BWiZuY5w.js";import"./MenuHamburger-kBHhFvVJ.js";import"./AccountSelector-Bh3LYNJI.js";import"./Switch-ClafsxpZ.js";import"./AccountMenu-CMinoV1y.js";import"./GlobalMenu-CIdPDdza.js";import"./Checkmark-BU8vtpH6.js";import"./ArrowUndo-L8RPPon2.js";import"./Globe-uYgrsE93.js";import"./BreadcrumbsLink-DVQNZRfZ.js";import"./ArrowRight-CLXTujYb.js";import"./Footer-atzPI7p2.js";import"./Flex-CHIj3aXb.js";import"./ButtonGroup-Cg6ykbdg.js";import"./ButtonGroupDivider-hDRnIfTz.js";import"./ChevronUpDown-BbTMADuY.js";import"./ToolbarMenu-CQrpu7F_.js";import"./ToolbarSearch-CQTFtziC.js";import"./SettingsModal-CEuFBG6Q.js";import"./ModalBody-MM25gKZr.js";import"./Section-BoLEShm2.js";import"./ButtonIcon-CNrehQ60.js";import"./ButtonLabel-B207nJqR.js";import"./TextField-BmqYfvA4.js";import"./inboxMenu-FGdRdNdw.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
