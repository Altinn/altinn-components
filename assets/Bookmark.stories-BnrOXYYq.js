import{a7 as o}from"./iframe-BmEoWqRz.js";import{u as S}from"./useProfileLayout-Cks8qusn.js";import{u as c,B as g}from"./useBookmarks-DJXnTJEb.js";import{L as k}from"./Layout-DQr2Y4nA.js";import{P as x}from"./PageBase-BWFph_Xq.js";import{H as p}from"./Heading-CSNATJ_q.js";import{T as b}from"./Toolbar-CRs9027a.js";import{B as I}from"./BookmarkModal-CLsVIfan.js";import{u as h}from"./useInboxLayout-BnCjFTF5.js";import{u as f}from"./useAccountMenu-CJec5Nhg.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D4e221bt.js";import"./Bell-C25k69Ny.js";import"./Bookmark-D5dXbgkQ.js";import"./ClockDashed-Diy8XoUh.js";import"./globalMenu-QAhr6KZw.js";import"./PersonCircle-CYNDl2iE.js";import"./Buildings2-BWSOsqxf.js";import"./InboxFill-C8TEDPFO.js";import"./MenuGrid-DHAK8FqC.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CQ0cOM4V.js";import"./Trash-CiLYMzmu.js";import"./useLayout-CjKRjw2y.js";import"./useLocale-BvZeOgOP.js";import"./header-hI4LxiQY.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C68PXoRq.js";import"./BookmarkSettingsItem-B8KMWsPO.js";import"./QueryLabel-CX7vBwL-.js";import"./Plus-BvGVmtNu.js";import"./SettingsItemBase-D04YoY0W.js";import"./ItemMedia-Db3gcn7a.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./ChevronUp-BklxGwTc.js";import"./ChevronDown-5iss_T7m.js";import"./ChevronRight-CG1CTQrY.js";import"./ItemBase-C6W6-0wj.js";import"./ItemLink-Bn8J_UL7.js";import"./ItemControls-Y4OIpieN.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./Typography-BVfh1yLf.js";import"./useHighlightedText-_GRR2uH-.js";import"./ContextMenu-CA9PQsOj.js";import"./useDropdownMenuController-D-8bCjIT.js";import"./Dropdown-DCNQ961w.js";import"./SearchField-C1uLMLLi.js";import"./FieldBase-T_Ol0Ej6.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./Input-DDCcqldd.js";import"./MenuListItem-B5VngT1X.js";import"./MenuListDivider-FJd_PUPB.js";import"./MenuListHeading-md5j_QVK.js";import"./MenuItem-BdKylwZo.js";import"./Checkmark-D1L9L_AM.js";import"./ItemLabel-Aob4vZQG.js";import"./InformationSquare-CFFqTuvm.js";import"./MenuElipsisHorizontal-CCU4AlZR.js";import"./Pencil-DC81L2T6.js";import"./SkipLink-BNiVU0wy.js";import"./CookieBanner-BeaXcAy_.js";import"./Banner-DZr00KuY.js";import"./GlobalHeader-B-zsFnXA.js";import"./useIsDesktop-mX8T95zL.js";import"./GlobalAccountButton-ChMPsHEp.js";import"./Enter-CNd-1-l1.js";import"./GlobalMenuButton-C9iLcIBI.js";import"./MenuHamburger-BSi0IvEo.js";import"./AccountSelector-Bl4089-N.js";import"./Switch-ChQjVpEb.js";import"./AccountMenu-fhq_23kZ.js";import"./GlobalMenu-oEN7-nvG.js";import"./ArrowUndo-DsIRF6CE.js";import"./Globe-Bl42L9Fa.js";import"./BreadcrumbsLink-Bvujkpkg.js";import"./ArrowRight-BOYOIiy2.js";import"./Footer-CQ24af--.js";import"./Flex-CErGdajF.js";import"./ButtonGroup-Bag4W9on.js";import"./ButtonGroupDivider-CPkcTHAx.js";import"./ChevronUpDown-B7C3KGYV.js";import"./ToolbarMenu-Dr9gs0X8.js";import"./ToolbarSearch-Dsllp4Yf.js";import"./SettingsModal-CFu-CX2C.js";import"./ModalBody-CAKbVWLZ.js";import"./Section-BwWH83Jj.js";import"./ButtonIcon-Bl6aXluP.js";import"./ButtonLabel-BEXQQUYk.js";import"./TextField-CsO8fcEe.js";import"./inboxMenu-Bt3xAwXy.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
