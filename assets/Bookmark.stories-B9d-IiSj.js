import{a7 as o}from"./iframe-C2dzRmjh.js";import{u as S}from"./useProfileLayout-BQ4SVHXw.js";import{u as c,B as g}from"./useBookmarks-BF_XjjNY.js";import{L as k}from"./Layout-BESVG-4a.js";import{P as x}from"./PageBase-DwS2vDt0.js";import{H as p}from"./Heading-CfKKA19E.js";import{T as b}from"./Toolbar-BTyAQSx8.js";import{B as I}from"./BookmarkModal-CSe2F2si.js";import{u as h}from"./useInboxLayout-C6sKe0Qw.js";import{u as f}from"./useAccountMenu-BxjGamUx.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CKxTLM5T.js";import"./Bell-CFAhbo75.js";import"./Bookmark-DUz8snvJ.js";import"./ClockDashed-97VI1zAA.js";import"./globalMenu-BIAGFQ8t.js";import"./PersonCircle-DSKNIxCS.js";import"./Buildings2-CK7NFVn3.js";import"./InboxFill-BqHFk0E9.js";import"./MenuGrid-EKha7Hm6.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CZc_K4aU.js";import"./Trash-C6xIZZfI.js";import"./useLayout-Cojtmutn.js";import"./useLocale-CjpPBswc.js";import"./header-Dt9p5SZw.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFtnvp_l.js";import"./BookmarkSettingsItem-5evQyLk4.js";import"./QueryLabel-DGxvVyOE.js";import"./Plus-CZi1FHk4.js";import"./SettingsItemBase-D_m37hJE.js";import"./ItemMedia-BDW8lmrL.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./ChevronUp-DhNGyOn8.js";import"./ChevronDown-DT113Xv8.js";import"./ChevronRight-DtjNYNu3.js";import"./ItemBase-BbocD9fV.js";import"./ItemLink-DOi6qrEf.js";import"./ItemControls-dnLa86IT.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./Typography-DJs4mnKu.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ContextMenu-C1mVo9es.js";import"./useDropdownMenuController-BTTkoYGq.js";import"./Dropdown-DtS9S0hY.js";import"./SearchField-uOvA63Zf.js";import"./FieldBase-Dvh5lIYF.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";import"./MenuListItem-4Fso0lef.js";import"./MenuListDivider-F2YAa9H7.js";import"./MenuListHeading-C9cVAuQ-.js";import"./MenuItem-BNIi9g5E.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./InformationSquare-D0pKd-n8.js";import"./MenuElipsisHorizontal-C1iYD589.js";import"./Pencil-Cmd5iEQR.js";import"./SkipLink-DycDzkmp.js";import"./Banner-C1JDonv1.js";import"./GlobalHeader-CgjF-Eft.js";import"./useIsDesktop-hTAGJPDL.js";import"./GlobalAccountButton-1N-AzRUz.js";import"./Enter-DNhLgdXe.js";import"./GlobalMenuButton-C_EX7h5n.js";import"./MenuHamburger-oqzJhj6q.js";import"./AccountSelector-DavzJPA3.js";import"./Switch-CzhDNOrG.js";import"./AccountMenu-hJwrNsx7.js";import"./GlobalMenu-B8dwTLwb.js";import"./ArrowUndo-e1ZOBjb3.js";import"./Globe-CoJRMQ-v.js";import"./BreadcrumbsLink-BQ_7q1hg.js";import"./ArrowRight-DkZaDrOS.js";import"./Footer-GfBJUugl.js";import"./Flex-Cz2ESd29.js";import"./ButtonGroup-BU_SIQJX.js";import"./ButtonGroupDivider-BtZGHb7R.js";import"./ChevronUpDown-fwYk0Kt7.js";import"./ToolbarMenu-Bvvgne6n.js";import"./ToolbarSearch-DNn3XfK0.js";import"./SettingsModal-BlxIbakF.js";import"./ModalBody-EYKNgO6y.js";import"./Section-DIoxVkTZ.js";import"./ButtonIcon-CeiijB1e.js";import"./ButtonLabel-BRr_e9Mc.js";import"./TextField-ZDeL-kQh.js";import"./inboxMenu-QaVLBTAH.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
