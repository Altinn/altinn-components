var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-uBWg0zsp.js";import{u as j}from"./useProfileLayout-Cfv_Qqmq.js";import{u as g,B as k}from"./useBookmarks-B9vlutD6.js";import{L as x}from"./Layout-DZANu_Hh.js";import{P as b}from"./PageBase-C4KJYlHc.js";import{H as n}from"./Heading-B2wyz-tz.js";import{T as I}from"./Toolbar-B2g5Tm7E.js";import{B as h}from"./BookmarkModal-Dh_LYm_B.js";import{u as C}from"./useInboxLayout--nQ42Y2D.js";import{u as y}from"./useAccountMenu-BWodzjgl.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BqDYZsQS.js";import"./Bell-CJr3Xvxi.js";import"./Bookmark-DYks1yWn.js";import"./ClockDashed-DJcBaFOk.js";import"./globalMenu-BSFVfjx8.js";import"./PersonCircle-Pj1-lGjF.js";import"./Buildings2-BFEb8cPA.js";import"./InboxFill-DkiEshJB.js";import"./MenuGrid-CTVAN0SB.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CUWUpWB2.js";import"./Trash-C1BuSK8u.js";import"./useLayout-CiIuMPZ2.js";import"./useLocale-beZubcQW.js";import"./header-CSxOLC7g.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CXJ-cLkO.js";import"./BookmarkSettingsItem-DtAHEzr8.js";import"./QueryLabel-BuGqoiMg.js";import"./Plus-BMtrBUYo.js";import"./SettingsItemBase-Dqw8W-AX.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";import"./ItemBase-DJIQNQsT.js";import"./ItemLink-DAu62COd.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./Typography-nYxE8-3g.js";import"./useHighlightedText-SyZl2q2q.js";import"./ContextMenu-BmGKPgKH.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./FieldBase-Bze69qIO.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./InformationSquare-D-wVMUGu.js";import"./MenuElipsisHorizontal-PnMCFiJK.js";import"./Pencil-XwlAcQRE.js";import"./SkipLink-DgpJ_2v3.js";import"./CookieBanner-BjYHKuiX.js";import"./Banner-BfHzf1w4.js";import"./GlobalHeader-D5vHX9No.js";import"./useIsDesktop-DcTRZ5ZT.js";import"./GlobalAccountButton-Drtkc2-N.js";import"./Enter-DhpyhqgF.js";import"./GlobalMenuButton-DMNOqqY2.js";import"./MenuHamburger-mpc9gk08.js";import"./AccountSelector-CGZQPmIW.js";import"./Switch-dVR22df8.js";import"./AccountMenu-N2jjgUvV.js";import"./GlobalMenu-Bb3b-FRJ.js";import"./ArrowUndo--sIB0AY5.js";import"./Globe-BL8S-NB7.js";import"./BreadcrumbsLink-CxH1qZz5.js";import"./ArrowRight-DsN3MKzI.js";import"./Footer-DRDgkYE3.js";import"./Flex-DndVrHjj.js";import"./ButtonGroup-C6ZuBQRD.js";import"./ButtonGroupDivider-CGBPGrPK.js";import"./ChevronUpDown-bcIda0WI.js";import"./ToolbarMenu-CKPkRkYr.js";import"./ToolbarSearch-C5ps8JRx.js";import"./SettingsModal-BznIzZKL.js";import"./ModalBody-BN9ps4gr.js";import"./Section-B5mZZWwm.js";import"./ButtonIcon-CRTvNn4A.js";import"./ButtonLabel-BCgwFtnQ.js";import"./TextField-Bm0uOHKU.js";import"./inboxMenu-D49pmuwh.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
