var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DV5agHf5.js";import{u as j}from"./useProfileLayout-BHQrJq0M.js";import{u as g,B as x}from"./useBookmarks-EpGdaREy.js";import{L as k}from"./Layout-C3SfnO8o.js";import{P as b}from"./PageBase-CmFL3REi.js";import{H as m}from"./Heading-Ct7f5Viq.js";import{T as I}from"./Toolbar-h9eSf8bs.js";import{B as h}from"./BookmarkModal-uoCcuh2Q.js";import{u as C}from"./useInboxLayout-D19xxMpA.js";import{u as y}from"./useAccountMenu-BWeYrxn_.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DVcNV07D.js";import"./Bell-BUBP0KMD.js";import"./Bookmark-Bep4WbZD.js";import"./ClockDashed-CEqAL55y.js";import"./globalMenu-Cmki8EvO.js";import"./PersonCircle-3fvyR-Zs.js";import"./Buildings2-JRf2It2a.js";import"./InboxFill-BuecJ8u6.js";import"./MenuGrid-BRhDAza_.js";import"./MagnifyingGlass-tTfHyx-p.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DszzhGXz.js";import"./Trash-DJnUMrV2.js";import"./useLayout-CxCh7PE4.js";import"./useLocale-BH4R6fqI.js";import"./header-38T2EOt5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BBdwWh--.js";import"./BookmarkSettingsItem-rtYEpmsu.js";import"./QueryLabel-0gh9q1QW.js";import"./Plus-BR13EOsl.js";import"./SettingsItemBase-CoibWoaE.js";import"./ItemMedia-K3xyGGVD.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./ChevronUp-CkyCCeXo.js";import"./ChevronDown-Brg3C2rz.js";import"./ChevronRight-DdV1IRY7.js";import"./ItemBase-CIH810RT.js";import"./ItemLink-CnSiS3gt.js";import"./ItemControls-Dpr02RM6.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./Typography-DklD6Rdi.js";import"./useHighlightedText-D74GV1fZ.js";import"./ContextMenu-pqpfeg2G.js";import"./useDropdownMenuController-BgPFU9Pq.js";import"./Dropdown-hdLzeqLa.js";import"./SearchField-DZ4t3H4v.js";import"./MenuListItem-CWjGfYeh.js";import"./MenuListDivider-B_yXfz6T.js";import"./MenuItem-0aaQQHkL.js";import"./CheckboxUncheckedIcon-B-IeYfRG.js";import"./RadioUncheckedIcon-DnY8WA8D.js";import"./ItemLabel-DMcOnD30.js";import"./FieldBase-D4-LzoRW.js";import"./Field-BelDBEf0.js";import"./Label-DXhZaYP8.js";import"./Input-CfHBGeL6.js";import"./InformationSquare-CpDw8TpS.js";import"./Pencil-DHgVxabF.js";import"./SkipLink-LyrS11DA.js";import"./CookieBanner-DME2vTqP.js";import"./Link-tw3HlPU6.js";import"./Banner-BY-nOb9Q.js";import"./GlobalHeader-ahSxCkcv.js";import"./useIsDesktop-Dgf_ImB_.js";import"./GlobalAccountButton-BsGWGzNM.js";import"./Enter-CPudqAed.js";import"./GlobalMenuButton-BFSvdCC_.js";import"./MenuHamburger-sep3wvC_.js";import"./AccountSelector-CtVsCXWw.js";import"./Switch-Cdw3bZt4.js";import"./AccountMenu-Zc-XGeGF.js";import"./GlobalMenu-Dzylc3ME.js";import"./Checkmark-B_VJ15Sz.js";import"./ArrowUndo-CRPQURmv.js";import"./Globe-CSSNkPCg.js";import"./BreadcrumbsLink-BrtOGbrU.js";import"./ArrowRight-BgPN7dhI.js";import"./Footer-CE_xU-HV.js";import"./Flex-BRxWwGAq.js";import"./ButtonGroup-CmPYcscv.js";import"./ButtonGroupDivider-TThAGLCi.js";import"./ChevronUpDown-BUW1Gmvq.js";import"./ToolbarMenu-HaDCIaqY.js";import"./ToolbarSearch-BYB6g1xg.js";import"./SettingsModal-CKmyGb9E.js";import"./ModalBody-DjOJuTHC.js";import"./Section-DqVAP5w4.js";import"./ButtonIcon-Dul20VIj.js";import"./ButtonLabel-DsirOtXC.js";import"./TextField-DdFqi9DN.js";import"./inboxMenu-BY1IsCvA.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
