var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-M-0W2Kc9.js";import{u as j}from"./useProfileLayout-DhEWxXdS.js";import{u as g,B as x}from"./useBookmarks-DSQ7loJv.js";import{L as k}from"./Layout-v6Qt2V8K.js";import{P as b}from"./PageBase-BDisxRkj.js";import{H as m}from"./Heading-BiiiOHzW.js";import{T as I}from"./Toolbar-CvbJikzK.js";import{B as h}from"./BookmarkModal-CkuhbvSg.js";import{u as C}from"./useInboxLayout-C32lrDGv.js";import{u as y}from"./useAccountMenu-_vjgMLUi.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CR39zrNl.js";import"./Bell-DWIt3W7G.js";import"./Bookmark-Bjnly7uL.js";import"./ClockDashed-CE3rKYo4.js";import"./globalMenu-Bte7cBv5.js";import"./PersonCircle-CBGrcbP_.js";import"./Buildings2-YNhXlUod.js";import"./InboxFill-Chtb-S2w.js";import"./MenuGrid-BfyJFOaJ.js";import"./MagnifyingGlass-BCQWJszI.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./useLayout-BZGgrSK_.js";import"./useLocale-BvsW5Ys3.js";import"./header-DZ2lWmTS.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1I6Xbj7.js";import"./BookmarkSettingsItem-Cr33fwfq.js";import"./QueryLabel-B7kGTmjQ.js";import"./Plus-DyAe2qPf.js";import"./SettingsItemBase-BCTOKKcn.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./ItemBase-F0Gk4WOT.js";import"./ItemLink-CCAm3_Nh.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./Typography-xHph4zf_.js";import"./useHighlightedText-DPRacH3N.js";import"./ContextMenu-BvjrPqZd.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemLabel-lDW_MVeZ.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./InformationSquare-DDYjH-iE.js";import"./Pencil-Dz6DWnFL.js";import"./SkipLink-DntJm87m.js";import"./CookieBanner-CKoUg9tE.js";import"./Link-DAR5zBg4.js";import"./Banner-Bo7eGbbS.js";import"./GlobalHeader-Be6Dpmtw.js";import"./GlobalAccountButton-By-2tKoX.js";import"./Enter-DvPk9pty.js";import"./GlobalMenuButton-DjmeRY1w.js";import"./MenuHamburger-C2Da0bEq.js";import"./AccountSelector-DjZHSBhK.js";import"./Switch-rSPs52No.js";import"./AccountMenu-GyTJFnAZ.js";import"./GlobalMenu-gxscJUse.js";import"./Checkmark-v-SGYEEX.js";import"./ArrowUndo-BbhWyJt8.js";import"./Globe-BsQeD7rm.js";import"./BreadcrumbsLink-CRb6C2Tw.js";import"./ArrowRight-BaGs8lxe.js";import"./Footer-vBS3rioj.js";import"./Flex-CvQqYnnc.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonGroupDivider-BumEVR6W.js";import"./ChevronUpDown-CXgasQ1o.js";import"./ToolbarMenu-CSjJL_Ps.js";import"./ToolbarSearch-thdeVilr.js";import"./SettingsModal-QTOJw0zh.js";import"./ModalBody-D2JzRsow.js";import"./Section-BRRFv94H.js";import"./ButtonIcon-B0Ww61Ca.js";import"./ButtonLabel-DaZOBcYC.js";import"./TextField-CHQPvnNv.js";import"./inboxMenu-BCFD0y5E.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
