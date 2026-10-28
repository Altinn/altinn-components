var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a5 as o}from"./iframe-BfD7syly.js";import{u as j}from"./useProfileLayout-9289cJ39.js";import{u as g,B as k}from"./useBookmarks-SGrGv6yG.js";import{L as x}from"./Layout-CHpZZy-N.js";import{P as b}from"./PageBase-CRoOkBV8.js";import{H as m}from"./Heading-M_gD0nhY.js";import{T as I}from"./Toolbar-u7iR49dR.js";import{B as h}from"./BookmarkModal-Jfot6IOV.js";import{u as C}from"./useInboxLayout-CDRHZpn7.js";import{u as y}from"./useAccountMenu-BpF8a_G0.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BV-KItZj.js";import"./Bell-C0iAft9K.js";import"./Bookmark-B2RW4bmm.js";import"./ClockDashed-BHc3FuEH.js";import"./globalMenu-CX2uOhHH.js";import"./PersonCircle-Dlxxw6BP.js";import"./Buildings2-BGyMsCbz.js";import"./InboxFill-DTYJlSxB.js";import"./MenuGrid-CU8AhdjO.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Do2Bo_ug.js";import"./Trash-DKa5Tgj8.js";import"./useLayout-CqkUQsA5.js";import"./useLocale-3YNQYid9.js";import"./header-BcIuFSSI.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-o9JsDoVb.js";import"./BookmarkSettingsItem-B9NrKUkx.js";import"./QueryLabel-CaU1Vxco.js";import"./Plus-Oie_r0eR.js";import"./SettingsItemBase-BtSbSFJ1.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";import"./ItemBase-ns7uWmGI.js";import"./ItemLink-B9RuLI2u.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./Typography-EJ3Vxj-4.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ContextMenu-4kM9ynf9.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./FieldBase-fk0uyKjd.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./MenuElipsisHorizontal-BaU63blA.js";import"./Pencil-CvJAPEmt.js";import"./SkipLink-BTv7syuZ.js";import"./CookieBanner-QVxSnXBQ.js";import"./Link-BuToNDy6.js";import"./Banner-wdoxvpRR.js";import"./GlobalHeader-lk5xpqdu.js";import"./useIsDesktop-Ba3et8z1.js";import"./GlobalAccountButton-B0Dl7laI.js";import"./Enter-CcW5u4Xu.js";import"./GlobalMenuButton-BPjq-f8K.js";import"./MenuHamburger-COAJxrWW.js";import"./AccountSelector-DOrv1x5T.js";import"./Switch-UQ3Ni1OJ.js";import"./AccountMenu-mY6CVbmC.js";import"./GlobalMenu-C4RLrARM.js";import"./ArrowUndo-C7PukArl.js";import"./Globe-BwTVQOT7.js";import"./BreadcrumbsLink-DYiILvvM.js";import"./ArrowRight-VmwRvciP.js";import"./Footer-CEdgTNjo.js";import"./Flex-B7LQuBXt.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonGroupDivider-CfD_ruqK.js";import"./ChevronUpDown-CjLJ_1zh.js";import"./ToolbarMenu-JEVAjleV.js";import"./ToolbarSearch-Carzb1Pu.js";import"./SettingsModal-BAff8Jkt.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";import"./TextField-Gc8uNQmn.js";import"./inboxMenu-BGyKHyXU.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
