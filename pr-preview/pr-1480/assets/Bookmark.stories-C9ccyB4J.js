var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-xlSYDLmX.js";import{u as j}from"./useProfileLayout-Cxck36v-.js";import{u as g,B as x}from"./useBookmarks-BYUL0KBH.js";import{L as k}from"./Layout-DLGCtKJK.js";import{P as b}from"./PageBase-COfzMrwb.js";import{H as m}from"./Heading-DK8bpf-l.js";import{T as I}from"./Toolbar-CFX4YYjF.js";import{B as h}from"./BookmarkModal-yH7bv6lx.js";import{u as C}from"./useInboxLayout-CMaT2uhv.js";import{u as y}from"./useAccountMenu-CeKxH1hX.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BXqiREJy.js";import"./Bell-1X4Q-x_J.js";import"./Bookmark-CwN43r-K.js";import"./ClockDashed-tCUkFT44.js";import"./globalMenu-DUgS66uh.js";import"./PersonCircle-DbC33sJW.js";import"./Buildings2-B9C4Wpww.js";import"./InboxFill-D1izvkko.js";import"./MenuGrid-C8x75imp.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DNZp7WUs.js";import"./Trash-Dtf6X4Tk.js";import"./useLayout-Cg8VChyL.js";import"./useLocale-DX6DGIz8.js";import"./header-BbZOjMSG.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C7Dhr05-.js";import"./BookmarkSettingsItem-DneIkLgl.js";import"./QueryLabel-B1YmIHq2.js";import"./Plus-B94II9lJ.js";import"./SettingsItemBase-CebRWWIM.js";import"./ItemMedia-DF0c3SDh.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./ItemBase-D6wd74Ed.js";import"./ItemLink-DzpDCAH4.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./Typography-CBKRdQ-b.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ContextMenu-DIOKC6O7.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./SearchField-Cm1bebf2.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemLabel-eTSb-Z0L.js";import"./FieldBase-CKEKDcDW.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./InformationSquare-DlLj2oH8.js";import"./Pencil-Ka3OhVM5.js";import"./SkipLink-DbFcsqGo.js";import"./CookieBanner-Bv33FMRA.js";import"./Link-Dd0FvdCr.js";import"./Banner-Dy_L3DR8.js";import"./GlobalHeader-CPP82mBY.js";import"./GlobalAccountButton-uCDrrwKM.js";import"./Enter-BB3yJ8-F.js";import"./GlobalMenuButton-BmrRLFGS.js";import"./MenuHamburger-Di3wOkSc.js";import"./AccountSelector-BEsgKni_.js";import"./Switch-GVxp4VPn.js";import"./AccountMenu-PFjNuNzI.js";import"./GlobalMenu-i-XbP5Gh.js";import"./Checkmark-opEEWy2T.js";import"./ArrowUndo-5Pl34Luc.js";import"./Globe-5mzhGoRG.js";import"./BreadcrumbsLink-CGJPd532.js";import"./ArrowRight-BtJExjIH.js";import"./Footer-oYNbV1h3.js";import"./Flex-Brl5o9wf.js";import"./ButtonGroup-CmZy2FTH.js";import"./ButtonGroupDivider-VDvXkf2q.js";import"./ChevronUpDown-BMjPc945.js";import"./ToolbarMenu-DHpy7bGP.js";import"./ToolbarSearch-C7r9vTyz.js";import"./SettingsModal-C1-SabfD.js";import"./ModalBody-2B3xwQox.js";import"./Section-Dg4Yy1fe.js";import"./ButtonIcon-C0Iduzzq.js";import"./ButtonLabel-DtsaJMNL.js";import"./TextField-CPjrIzns.js";import"./inboxMenu-vxstSZ3P.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
