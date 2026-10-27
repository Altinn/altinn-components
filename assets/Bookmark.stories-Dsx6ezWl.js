var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a5 as o}from"./iframe-CplFPuE2.js";import{u as j}from"./useProfileLayout-Dfk8vJvk.js";import{u as g,B as k}from"./useBookmarks-Dc15xF9Q.js";import{L as x}from"./Layout-DP26g9fu.js";import{P as b}from"./PageBase-CXMH_kNw.js";import{H as m}from"./Heading-H6e_lYEN.js";import{T as I}from"./Toolbar-DU79cBAf.js";import{B as h}from"./BookmarkModal-BPl6bi1H.js";import{u as C}from"./useInboxLayout-CbpqUgcE.js";import{u as y}from"./useAccountMenu-Dv4Sdotu.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CCjIgyb1.js";import"./Bell-Ks_WFjfG.js";import"./Bookmark-BJQ0a4vS.js";import"./ClockDashed-Cu0lpOdc.js";import"./globalMenu-DRK-Ye3A.js";import"./PersonCircle-CYa0pHIh.js";import"./Buildings2-BYsgmedO.js";import"./InboxFill-u0vQs3UT.js";import"./MenuGrid-vv6hTZbm.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-YBefTHiT.js";import"./Trash-DVLYtG5v.js";import"./useLayout-eHGoyRSa.js";import"./useLocale-CFpX76Nf.js";import"./header-OLW70M6w.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Ct0wDmor.js";import"./BookmarkSettingsItem-D5oM49gi.js";import"./QueryLabel-6LqZJ8mQ.js";import"./Plus-Cjvj3mBz.js";import"./SettingsItemBase-CnCqpkD_.js";import"./ItemMedia-BtRJ3M2I.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";import"./ItemBase-D8QKfK-5.js";import"./ItemLink-BYmj_1KC.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./Typography-pPFkmvZJ.js";import"./useHighlightedText-BpzjnQwF.js";import"./ContextMenu-CvyTDIiz.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./SearchField-4LhcGogw.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./FieldBase-BHrQkTmp.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";import"./MenuElipsisHorizontal-DQHYA2e7.js";import"./Pencil-CB0Mn6gK.js";import"./SkipLink-sK2faEPI.js";import"./CookieBanner-BgZliC6U.js";import"./Link-CMftgIk_.js";import"./Banner-CzeU5Q0W.js";import"./GlobalHeader-SKQU1uDp.js";import"./useIsDesktop-CmVRZlHm.js";import"./GlobalAccountButton-BERkiVLH.js";import"./Enter-Cwjyt1wf.js";import"./GlobalMenuButton-BNydYUFB.js";import"./MenuHamburger-BPHgOQ4b.js";import"./AccountSelector-BI05tbaS.js";import"./Switch-Bduvd3lO.js";import"./AccountMenu-BTd4-rYQ.js";import"./GlobalMenu-C49hRwgU.js";import"./ArrowUndo-D1R9ATiN.js";import"./Globe-N6PuO_kS.js";import"./BreadcrumbsLink-BPjCl2zG.js";import"./ArrowRight-BZ_DNn6R.js";import"./Footer-BSpnSp3p.js";import"./Flex-CoXKQauA.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonGroupDivider-CKEVKxff.js";import"./ChevronUpDown-6RtyQlti.js";import"./ToolbarMenu-C1bI1EOA.js";import"./ToolbarSearch-BJxiTUIW.js";import"./SettingsModal-xBJrpL7h.js";import"./ModalBody-BJDu01Be.js";import"./Section-CaXjLAlu.js";import"./ButtonIcon-B77pSTxU.js";import"./ButtonLabel-Bdm9dHON.js";import"./TextField-DkVZ8i71.js";import"./inboxMenu-BbwdQEZ1.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
