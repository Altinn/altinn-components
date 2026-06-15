import{a7 as o}from"./iframe-D-JzFSbn.js";import{u as S}from"./useProfileLayout-Du1krpOj.js";import{u as c,B as g}from"./useBookmarks-C3LxAstc.js";import{L as k}from"./Layout-BD82hjWW.js";import{P as x}from"./PageBase-DI1jDjZe.js";import{H as p}from"./Heading-BuD5A-91.js";import{T as b}from"./Toolbar-ic5DL5hr.js";import{B as I}from"./BookmarkModal-D6LJgYC-.js";import{u as h}from"./useInboxLayout-DpW1Ce8u.js";import{u as f}from"./useAccountMenu-CMCDLL7T.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-NXszfuYa.js";import"./Bell-B1Za1_B3.js";import"./Bookmark-CJUNimhQ.js";import"./ClockDashed-oddFCb0b.js";import"./globalMenu-DGEi3Mff.js";import"./PersonCircle-DO-9t4DB.js";import"./Buildings2-D0k5b2lr.js";import"./InboxFill-D3re9bjR.js";import"./MenuGrid-D5VgneP7.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CvXQ6eh-.js";import"./Trash-D3qdF3-Q.js";import"./useLayout-B5_9xKQm.js";import"./useLocale-BvHq_9v2.js";import"./header-Bmhc-3Oe.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DF0RLrk1.js";import"./BookmarkSettingsItem-BD2KOcEp.js";import"./QueryLabel-DRuLqCf9.js";import"./Plus-D_QwnLRF.js";import"./SettingsItemBase-CJ5K594X.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./ChevronRight-CnTD3zzq.js";import"./ItemBase-M7V_iwXR.js";import"./ItemLink-B5PMO6Sl.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./Typography-B37rH5fJ.js";import"./useHighlightedText-kVudreWZ.js";import"./ContextMenu-DTF5h8Vw.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./SearchField-Cu2rkG8b.js";import"./FieldBase-BAxlQmDt.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuListDivider-DzTLggx0.js";import"./MenuListHeading-B2S0HcdV.js";import"./MenuItem-wkNgjJsE.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./MenuElipsisHorizontal-CYuAhYGx.js";import"./Pencil-CbbPbQUG.js";import"./SkipLink-CxtnkcmF.js";import"./Banner-tDoXpoSp.js";import"./GlobalHeader-BAf-YgFM.js";import"./useIsDesktop-3xDb_c_C.js";import"./GlobalAccountButton-CkEkdv_9.js";import"./Enter-B0vJcQsB.js";import"./GlobalMenuButton-doTjfTGf.js";import"./MenuHamburger-DoyVxZov.js";import"./AccountSelector-C0CAlind.js";import"./Switch-7NaDBReq.js";import"./AccountMenu-D3wMQ8uQ.js";import"./GlobalMenu-DGd9JN5n.js";import"./ArrowUndo-d5C4LDWT.js";import"./Globe-C_Gmims4.js";import"./BreadcrumbsLink-fssIU64W.js";import"./ArrowRight-C7Q4eiPE.js";import"./Footer-83zURXVJ.js";import"./Flex-LyiOw0eI.js";import"./ButtonGroup-DM3FeQWD.js";import"./ButtonGroupDivider-tJv6yybS.js";import"./ChevronUpDown-DbbRNNdg.js";import"./ToolbarMenu-D4USdHwc.js";import"./ToolbarSearch-BKjsei65.js";import"./SettingsModal-BCGiznCY.js";import"./ModalBody-C_e5HAx8.js";import"./Section-C7pnuU7Y.js";import"./ButtonIcon-BlmrgHJU.js";import"./ButtonLabel-D-OBonPW.js";import"./TextField-3RnNCSAg.js";import"./inboxMenu-DzNpRCsy.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
