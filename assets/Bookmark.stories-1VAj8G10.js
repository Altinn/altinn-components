var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-Ck42qOx1.js";import{u as j}from"./useProfileLayout-CEPCXCEW.js";import{u as g,B as k}from"./useBookmarks-5OQ6QMa0.js";import{L as x}from"./Layout-DO1kRlg1.js";import{P as b}from"./PageBase-BG0jmuXn.js";import{H as n}from"./Heading-CWc2O27X.js";import{T as I}from"./Toolbar-DlQHJZIq.js";import{B as h}from"./BookmarkModal-Lpo053Id.js";import{u as C}from"./useInboxLayout-dqX1Dwks.js";import{u as y}from"./useAccountMenu-DsX4mUWw.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DWHY2qOR.js";import"./Bell-C9thxVLV.js";import"./Bookmark-DJEuTHB_.js";import"./ClockDashed-1RQ8UU49.js";import"./globalMenu-B2DxW95W.js";import"./PersonCircle-BOj09QIw.js";import"./Buildings2-DL0ggmdl.js";import"./InboxFill-D7_H0CmT.js";import"./MenuGrid-Bu376UhO.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DTVQB6g6.js";import"./Trash-hM9OCzu1.js";import"./useLayout-BxgrZEpM.js";import"./useLocale-B1NgXTrx.js";import"./header-BEkB8-SK.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BBAeNj9K.js";import"./BookmarkSettingsItem-CaLvxFch.js";import"./QueryLabel-HCbK7DZ5.js";import"./Plus-1EeeSaLT.js";import"./SettingsItemBase-BOQ-SQ7r.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./ChevronRight-DWZnEevf.js";import"./ItemBase-CjTMF0wf.js";import"./ItemLink-D_slDvwR.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./Typography-nObbjg0R.js";import"./useHighlightedText-BgClQYDl.js";import"./ContextMenu-B0efyfFm.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./SearchField-B8KiDBUc.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./FieldBase-ly-5mtcw.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";import"./MenuElipsisHorizontal-BhzA5KpZ.js";import"./Pencil-6kCQ5ICS.js";import"./SkipLink-DHkdA6Mx.js";import"./CookieBanner-Dp8DU3hx.js";import"./Link-DG8ufNV-.js";import"./Banner-CXO-NfdB.js";import"./GlobalHeader-C_xj6DIj.js";import"./useIsDesktop-Bk2hO8WM.js";import"./GlobalAccountButton-BtmdH2Tx.js";import"./Enter-BsxyvaAW.js";import"./GlobalMenuButton-DkFOr-X_.js";import"./MenuHamburger-CF5_JoaO.js";import"./AccountSelector-DRpQGVU6.js";import"./Switch-B1H2K7js.js";import"./AccountMenu-D1k5sfyr.js";import"./GlobalMenu-s93dAZzh.js";import"./ArrowUndo-BORXbKBL.js";import"./Globe-4hEu2YgG.js";import"./BreadcrumbsLink-DvaHLwgW.js";import"./ArrowRight-B3peGAbp.js";import"./Footer-C7cpYrr2.js";import"./Flex-CzBhjOdV.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonGroupDivider-CJV6LKqZ.js";import"./ChevronUpDown-DmZkFijA.js";import"./ToolbarMenu-CQihSIrV.js";import"./ToolbarSearch-DTrO7UQI.js";import"./SettingsModal-DgcCT0IL.js";import"./ModalBody-0O6NY7SM.js";import"./Section-wNwpgjpU.js";import"./ButtonIcon-CYrEachb.js";import"./ButtonLabel-5wbsHXmv.js";import"./TextField-BT_NxReM.js";import"./inboxMenu-B-LQ8BqP.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
